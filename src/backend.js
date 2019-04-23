let products = new Map();
let gameAssetsMap = new Map();
let gameData = {
  populations: [],
  workforces: [],
  buildings: [],
  categories: []
};


class Population {
  constructor(config) {
    this.id = config.id;
    this.name = config.name;
    this.text = config.text;
    this.icon = config.icon || "";
    this.amount = 0;
    this.needs = [];
    this.needsCache = config.needs;
  }
  
  updateAmount(newAmount) {
    this.amount = newAmount;
    this.updateNeeds();
  }
  
  initNeeds() {
    // add input tuples
    this.needsCache.forEach(n => {
      if (n.amount > 0) {
        let tmp = n;
        tmp.consumer = this;
        this.needs.push(new ConsumerProductTuple(tmp));
      }
    });
    delete this.needsCache;
  }
  
  updateNeeds() {
    this.needs.forEach(n => {
      n.updateAmount(this.amount);
    });
  }
}

class ProductionBuilding {
  constructor(config) {
    this.id = config.id;
    this.name = config.name;
    this.text = config.text;
    this.icon = config.icon || "";
    this.amount = 0;
    // noinspection MagicNumberJS
    this.percentEfficiency = 100;
    this.inputs = [];
    this.inputsCache = config.inputs || [];
    this.outputs = [];
    this.outputsCache = config.outputs || [];
    this.maintenances = [];
    this.workforceDemands = [];
    this.maintenances_cache = config.maintenances;
  }
  
  initInputs() {
    // add input tuples
    this.inputsCache.forEach(i => {
      if (i.amount > 0) {
        let tmp = i;
        tmp.consumer = this;
        this.inputs.push(new ConsumerProductTuple(tmp));
      }
    });
    delete this.inputsCache;
  }
  
  updateInputs() {
    this.inputs.forEach(i => {
      i.updateAmount(this.amount);
    });
  }
  
  initOutputs() {
    // add output tuples
    this.outputsCache.forEach(o => {
      if (o.amount > 0) {
        let tmp = o;
        tmp.producer = this;
        this.outputs.push(new ProducerProductTuple(tmp));
      }
    });
    delete this.outputsCache;
  }
  
  updateOutputs() {
    this.outputs.forEach(o => {
      o.updateAmount(this.amount);
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
      w.updateAmount(this.amount);
    });
  }
  
  setPercentEfficiency(newPercentEfficiency) {
    this.percentEfficiency = newPercentEfficiency;
    this.outputs.forEach(o => {
      o.recalculateProduceAtLeast();
    });
  }
  
  setAmount(newAmount) {
    this.amount = newAmount;
    this.updateOutputs();
    this.updateInputs();
    this.updateWorkforceDemand();
  }
  
  updateAmountAtLeast(amount) {
    // TODO handle multiple outputs
    // noinspection MagicNumberJS
    this.amount = Math.ceil(amount / (this.percentEfficiency / 100));
    this.updateOutputs();
    this.updateInputs();
    this.updateWorkforceDemand();
  }
}

class Product {
  constructor(config) {
    this.id = config.id;
    this.name = config.name;
    this.text = config.text;
    this.icon = config.icon || "";
    this.category = config.category;
    this.amountConsumed = 0;
    this.amountProduced = 0;
    this.producers = [];
    this.consumers = [];
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
    this.amountConsumed = sum;
    // TODO handle multiple producer
    this.producers[0].produceAtLeast(this.amountConsumed);
  }
  
  updateAmountProduced() {
    let sum = 0;
    this.producers.forEach(p => {
      sum += p.amount;
    });
    this.amountProduced = sum;
  }
}

class Workforce {
  constructor(config) {
    this.id = config.id;
    this.name = config.name;
    this.text = config.text;
    this.icon = config.icon || "";
    this.amountConsumed = 0;
    this.consumers = [];
  }
  
  addConsumer(demand) {
    this.consumers.push(demand);
  }
  
  updateAmountConsumed() {
    let sum = 0;
    this.consumers.forEach(c => {
      sum += c.amount;
    });
    this.amountConsumed = sum;
  }
}

class ConsumerProductTuple {
  constructor(config) {
    this.id = config.id;
    this.amount = 0;
    if (config.amount_per_minute) {
      this.amountPerConsumer = config.amount_per_minute;
    } else {
      this.amountPerConsumer = config.amount;
    }
    this.consumer = config.consumer;
    // link to product
    this.product = gameAssetsMap.get(this.id);
    if (this.product !== undefined && this.product instanceof Product) {
      this.product.addConsumer(this);
    } else {
      throw "Consumer" + this.consumer.id + "can't find product " + this.id;
    }
  }
  
  updateAmount(consumerAmount) {
    this.amount = this.amountPerConsumer * consumerAmount;
    this.product.updateAmountConsumed();
  }
}

class WorkforceDemand {
  constructor(config) {
    this.id = config.id;
    this.amount = 0;
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
    this.amount = 0;
    this.amountDemanded = 0;
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
  
  updateAmount(producerAmount) {
    this.amount = this.amountPerProducer * producerAmount;
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
    let p = new Population(population);
    gameAssetsMap.set(p.id, p);
    gameData.populations.push(p);
  });
  
  data.production_buildings.forEach(building => {
    let b = new ProductionBuilding(building);
    gameAssetsMap.set(b.id, b);
    gameData.buildings.push(b);
  });
  
  data.products.forEach(product => {
    let p = new Product(product);
    products.set(p.id, p);
    gameAssetsMap.set(p.id, p);
  });
  
  data.workforces.forEach(workforce => {
    let w = new Workforce(workforce);
    gameAssetsMap.set(w.id, w);
    gameData.workforces.push(w);
  });
  
  gameData.populations.forEach(p => {
    p.initNeeds();
  });
  gameData.buildings.forEach(b => {
    b.initInputs();
    b.initOutputs();
    b.initWorkforceDemand();
  });
  
  data.product_categories.forEach(category => {
    let c = new ProductCategory(category);
    gameAssetsMap.set(c.id, c);
    gameData.categories.push(c);
  });
}

export default {
  products, gameAssetsMap, gameData,
  //Population, ProductionBuilding,
  //Product, Workforce,
  //ConsumerProductTuple, WorkforceDemand, ProducerProductTuple,
  //ProductCategory,
  init
};
