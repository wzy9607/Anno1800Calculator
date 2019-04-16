<template>
  <div id="app">
    <img
        alt="Anno 1800 banner"
        :src="getImage('resources/balance.png')"
    >
    <Populations :populations="gameDataView.populations"></Populations>
    <Workforces :workforces="gameDataView.workforces"></Workforces>
    <ProductCategories :product-categories="gameDataView.categories"></ProductCategories>
  </div>
</template>

<script>
  //components
  import Populations from "./components/Populations.vue";
  import Workforces from "./components/Workforces.vue";
  import ProductCategories from "./components/ProductCategories.vue";
  // data
  import PopulationLevelsData from "./json/population_levels.json";
  import ProductionBuildingsData from "./json/production_buildings.json";
  import ProductsData from "./json/products.json";
  import WorkforcesData from "./json/workforces.json";
  import ProductCategoriesData from "./json/product_categories.json";
  // calculator core
  import * as Core from "./core.js";
  
  export default {
    name: "App",
    components: {
      Populations,
      Workforces,
      ProductCategories
    },
    data: function () {
      return {
        gameDataView: Core.view,
        gameAssetsMap: Core.gameAssetsMap
      };
    },
    created() {
      this.init();
    },
    methods: {
      getImage(path) {
        return require("./assets/img/" + path);
      },
      init() {
        let populationLevels = JSON.parse(JSON.stringify(PopulationLevelsData.PopulationLevels));
        let productionBuildings = JSON.parse(JSON.stringify(ProductionBuildingsData.ProductionBuildings));
        let products = JSON.parse(JSON.stringify(ProductsData.Products));
        let workforces = JSON.parse(JSON.stringify(WorkforcesData.Workforces));
        let productCategories = JSON.parse(JSON.stringify(ProductCategoriesData.ProductCategories));
        let data = {
          population_levels: populationLevels,
          production_buildings: productionBuildings,
          products: products,
          workforces: workforces,
          product_categories: productCategories
        };
        Core.init(data);
        /*
        Core.products.forEach(product => {
          console.log(product);
          console.log(product.id);
          console.log(product.producers);
        });
        Core.view.buildings.forEach(buildings => {
          console.log(buildings);
          console.log(buildings.id);
        });
        Core.view.categories.forEach(category => {
          console.log(category);
          console.log(category.id);
          console.log(category.order);
          console.log(category.products);
        });*/
      },
    }
  };
</script>

<style lang="scss">
  #app{
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
