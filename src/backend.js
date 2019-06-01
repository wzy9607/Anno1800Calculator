// Game assets are objects that contain data load from jsons and the whole calculation program.
// Should be constant.
let gameAssetsMap = new Map();
let gameAssets = {
  populations: [],
  workforces: [],
  buildings: [],
  categories: [],
  products: new Map()
};

// User data contain all data that can be changed by user or as results of user input.
// Should be stored locally.
let userDataMap = new Map();
let userData = {
  populations: [], // id, amount
  workforces: [], // id, amountConsumed
  buildings: [], // id, amount, percentEfficiency
  products: [] // id, amountConsumed, amountProduced
};

let defaultPercentEfficiency = 100.00;

class Population {
  constructor(config) {
    this.id = config.id;
    this.name = config.name;
    this.text = config.text;
    this.icon = config.icon || "";
    this.pop_per_house = config.max_pop_per_house;
    this.needTuples = [];
    this.needsCache = config.needs;
    this.userData = {};
  }
  
  updateAmount(newAmount) {
    this.userData.amount = newAmount;
    this.amount = newAmount;
    this.updateNeeds();
  }
  
  initNeeds() {
    // add input tuples
    this.needsCache.forEach(n => {
      if (n.amount > 0) {
        let tmp = n;
        tmp.consumer = this;
        tmp.amount_per_minute = tmp.amount * 60 / this.pop_per_house;
        this.needTuples.push(new ConsumerProductTuple(tmp));
      }
    });
    delete this.needsCache;
  }
  
  updateNeeds() {
    this.needTuples.forEach(n => {
      n.updateAmount(this.userData.amount, 1);
    });
  }
}

class ProductionBuilding {
  constructor(config) {
    this.id = config.id;
    this.name = config.name;
    this.text = config.text;
    this.icon = config.icon || "";
    this.inputTuples = [];
    this.inputsCache = config.inputs || [];
    this.outputTuples = [];
    this.outputsCache = config.outputs || [];
    this.maintenances = [];
    this.workforceDemands = [];
    this.maintenances_cache = config.maintenances;
    this.userData = {};
  }
  
  initInputs() {
    // add input tuples
    this.inputsCache.forEach(i => {
      if (i.amount > 0) {
        let tmp = i;
        tmp.consumer = this;
        this.inputTuples.push(new ConsumerProductTuple(tmp));
      }
    });
    delete this.inputsCache;
  }
  
  updateInputs() {
    this.inputTuples.forEach(i => {
      i.updateAmount(this.userData.amount, this.userData.percentEfficiency / defaultPercentEfficiency);
    });
  }
  
  initOutputs() {
    // add output tuples
    this.outputsCache.forEach(o => {
      if (o.amount > 0) {
        let tmp = o;
        tmp.producer = this;
        this.outputTuples.push(new ProducerProductTuple(tmp));
      }
    });
    delete this.outputsCache;
  }
  
  updateOutputs() {
    this.outputTuples.forEach(o => {
      o.updateAmount(this.userData.amount, this.userData.percentEfficiency / defaultPercentEfficiency);
    });
  }
  
  initWorkforceDemand() {
    // add workforce tuples
    // TODO add other maintenances
    this.maintenances_cache.forEach(m => {
      let a = gameAssetsMap.get(m.id);
      if (a instanceof Workforce) {
        this.workforceDemands.push(new WorkforceDemand(m));
      }
    });
    delete this.maintenances_cache;
  }
  
  updateWorkforceDemand() {
    this.workforceDemands.forEach(w => {
      w.updateAmount(this.userData.amount);
    });
  }
  
  setPercentEfficiency(newPercentEfficiency) {
    this.userData.percentEfficiency = newPercentEfficiency;
    if (this.isChainEnd() === false) { // FIXME 1010302's output 1010224 used by both other buildings and ships
      this.outputTuples.forEach(o => {
        o.recalculateProduceAtLeast();
      });
    } else {
      this.updateOutputs();
      this.updateInputs();
    }
  }
  
  updateAmount(newAmount) {
    this.userData.set("amount", newAmount);
    this.updateOutputs();
    this.updateInputs();
    this.updateWorkforceDemand();
  }
  
  updateAmountAtLeast(newAmount) {
    // TODO handle multiple outputs
    this.userData.amount = Math.ceil(newAmount / (this.userData.percentEfficiency / defaultPercentEfficiency));
    this.updateOutputs();
    this.updateInputs();
    this.updateWorkforceDemand();
  }
  
  isChainEnd() {
    let flag = true;
    for (const outputTuple of this.outputTuples) {
      if (outputTuple.product.consumers.length !== 0) {
        flag = false;
      }
    }
    return flag;
  }
}

class Product {
  constructor(config) {
    this.id = config.id;
    this.name = config.name;
    this.text = config.text;
    this.icon = config.icon || "";
    this.category = config.category;
    this.producers = [];
    this.consumers = [];
    this.userData = {};
  }
  
  addProducer(production) {
    this.producers.push(production);
  }
  
  addConsumer(demand) {
    this.consumers.push(demand);
  }
  
  updateAmountConsumed() {
    let sum = 0;
    this.consumers.forEach(c => {
      sum += c.amount;
    });
    this.userData.amountConsumed = sum;
    // TODO handle multiple producer
    this.producers[0].produceAtLeast(sum);
  }
  
  updateAmountProduced() {
    let sum = 0;
    this.producers.forEach(p => {
      sum += p.amount;
    });
    this.userData.amountProduced = sum;
  }
}

class Workforce {
  constructor(config) {
    this.id = config.id;
    this.name = config.name;
    this.text = config.text;
    this.icon = config.icon || "";
    this.consumers = [];
    this.userData = {};
  }
  
  addConsumer(demand) {
    this.consumers.push(demand);
  }
  
  updateAmountConsumed() {
    let sum = 0;
    this.consumers.forEach(c => {
      sum += c.amount;
    });
    this.userData.amountConsumed = sum;
  }
}

class ConsumerProductTuple {
  constructor(config) {
    this.id = config.id;
    this.amount = 0; // TODO
    this.amountPerConsumer = config.amount_per_minute;
    this.consumer = config.consumer;
    // link to product
    this.product = gameAssetsMap.get(this.id);
    if (this.product !== undefined && this.product instanceof Product) {
      this.product.addConsumer(this);
    } else {
      throw "Consumer" + this.consumer.id + "can't find product " + this.id;
    }
  }
  
  updateAmount(consumerAmount, consumerEfficiency) {
    this.amount = this.amountPerConsumer * consumerAmount * consumerEfficiency;
    this.product.updateAmountConsumed();
  }
}

class WorkforceDemand {
  constructor(config) {
    this.id = config.id;
    this.amount = 0; // TODO
    this.amountPerConsumer = config.amount;
    // link to workforce
    this.workforce = gameAssetsMap.get(this.id);
    if (this.workforce !== undefined && this.workforce instanceof Workforce) {
      this.workforce.addConsumer(this);
    } else {
      throw "Can't find workforce " + this.id;
    }
  }
  
  updateAmount(buildingAmount) {
    this.amount = this.amountPerConsumer * buildingAmount;
    this.workforce.updateAmountConsumed();
  }
}

class ProducerProductTuple {
  constructor(config) {
    this.id = config.id;
    this.amount = 0; // TODO
    this.amountDemanded = 0; // TODO
    if (config.amount_per_minute) {
      this.amountPerProducer = config.amount_per_minute;
    } else {
      this.amountPerProducer = config.amount;
    }
    this.producer = config.producer;
    // link to product
    this.product = gameAssetsMap.get(this.id);
    if (this.product !== undefined && this.product instanceof Product) {
      this.product.addProducer(this);
    } else {
      throw "Producer " + this.producer.id + " can't find product " + this.id;
    }
  }
  
  updateAmount(producerAmount, producerEfficiency) {
    this.amount = this.amountPerProducer * producerAmount * producerEfficiency;
    this.product.updateAmountProduced();
  }
  
  produceAtLeast(amount) {
    this.amountDemanded = amount;
    // TODO handle multiple outputs
    this.producer.updateAmountAtLeast(this.amountDemanded / this.amountPerProducer);
  }
  
  recalculateProduceAtLeast() {
    // TODO handle multiple outputs
    this.producer.updateAmountAtLeast(this.amountDemanded / this.amountPerProducer);
  }
}

class ProductCategory {
  constructor(config) {
    this.id = config.id;
    this.order = config.order;
    this.name = config.name;
    this.text = config.text;
    this.products = config.products.map(p => gameAssetsMap.get(p));
  }
}

function init(data) {
  data.population_levels.forEach(population => {
    let asset = new Population(population);
    gameAssetsMap.set(asset.id, asset);
    gameAssets.populations.push(asset);
    let datum = {
      id: asset.id,
      amount: 0
    };
    userDataMap.set(asset.id, datum);
    userData.populations.push(datum);
    asset.userData = datum;
  });
  
  data.production_buildings.forEach(building => {
    let asset = new ProductionBuilding(building);
    gameAssetsMap.set(asset.id, asset);
    gameAssets.buildings.push(asset);
    let datum = {
      id: asset.id,
      amount: 0,
      percentEfficiency: defaultPercentEfficiency
    };
    userDataMap.set(asset.id, datum);
    userData.buildings.push(datum);
    asset.userData = datum;
  });
  
  data.products.forEach(product => {
    let asset = new Product(product);
    gameAssets.products.set(asset.id, asset);
    gameAssetsMap.set(asset.id, asset);
    let datum = {
      id: asset.id,
      amountConsumed: 0,
      amountProduced: 0
    };
    userDataMap.set(asset.id, datum);
    userData.products.push(datum);
    asset.userData = datum;
  });
  
  data.workforces.forEach(workforce => {
    let asset = new Workforce(workforce);
    gameAssetsMap.set(asset.id, asset);
    gameAssets.workforces.push(asset);
    let datum = {
      id: asset.id,
      amountConsumed: 0
    };
    userDataMap.set(asset.id, datum);
    userData.workforces.push(datum);
    asset.userData = datum;
  });
  
  gameAssets.populations.forEach(p => {
    p.initNeeds();
  });
  gameAssets.buildings.forEach(b => {
    b.initInputs();
    b.initOutputs();
    b.initWorkforceDemand();
  });
  
  data.product_categories.forEach(category => {
    let c = new ProductCategory(category);
    gameAssetsMap.set(c.id, c);
    gameAssets.categories.push(c);
  });
}

function setDefaultUserData() {
  gameAssets.populations.forEach(population => {
    let datum = userDataMap.get(population.id);
    datum.amount = 0;
  });
  
  gameAssets.buildings.forEach(building => {
    let datum = userDataMap.get(building.id);
    datum.amount = 0;
    datum.percentEfficiency = defaultPercentEfficiency;
  });
  
  gameAssets.products.forEach(product => {
    let datum = userDataMap.get(product.id);
    datum.amountConsumed = 0;
    datum.amountProduced = 0;
  });
  
  gameAssets.workforces.forEach(workforce => {
    let datum = userDataMap.get(workforce.id);
    datum.amountConsumed = 0;
  });
}


export default {
  gameAssetsMap, gameAssets, userDataMap, userData,
  //Population, ProductionBuilding,
  //Product, Workforce,
  //ConsumerProductTuple, WorkforceDemand, ProducerProductTuple,
  //ProductCategory,
  init, setDefaultUserData
};
