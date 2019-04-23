<template>
  <div id="app">
    <!--TODO use a real banner image-->
    <img
        alt="Anno 1800 banner"
        :src="getImage('resources/balance.png')"
    >
    <h1>
      Anno 1800 Calculator
    </h1>
    <div>
      <Populations
          text="Residents"
          :populations="gameData.populations"
      ></Populations>
      <Workforces
          text="Workforces"
          :workforces="gameData.workforces"
      ></Workforces>
      <div
          v-for="category in productCategoriesOrdered"
          :key="category.id"
      >
        <!--Strategic products-->
        <div v-if="category.id===11797"></div>
        <!--TODO
        <ProductCategoryStrategic
            v-else-if="category.id===11797"
            :id="category.id"
            :text="category.text"
            :products="category.products"
        ></ProductCategoryStrategic>-->
        <ProductCategory
            v-else
            :id="category.id"
            :text="category.text"
            :products="category.products"
        ></ProductCategory>
      </div>
    </div>
  </div>
</template>

<script>
  import Lodash from "lodash";
  //components
  import Populations from "./Populations.vue";
  import Workforces from "./Workforces.vue";
  import ProductCategory from "./ProductCategory.vue";
  // import ProductCategoryStrategic from "./components/ProductCategoryStrategic.vue";
  // data
  import PopulationLevelsData from "../json/population_levels.json";
  import ProductionBuildingsData from "../json/production_buildings.json";
  import ProductsData from "../json/products.json";
  import WorkforcesData from "../json/workforces.json";
  import ProductCategoriesData from "../json/product_categories.json";
  // calculator core
  import Backend from "../backend.js";
  // Load typeface
  require("source-sans-pro/source-sans-pro.css");
  
  export default {
    name: "App",
    components: {
      Populations,
      Workforces,
      ProductCategory
      // ProductCategoryStrategic
    },
    data: function () {
      return {
        gameData: Backend.gameData,
        gameAssetsMap: Backend.gameAssetsMap
      };
    },
    computed: {
      productCategoriesOrdered: function () {
        return Lodash.orderBy(this.gameData.categories, ["order"]);
      }
    },
    created() {
      this.init();
    },
    methods: {
      getImage(path) {
        return require("../assets/img/" + path);
      },
      init: function () {
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
        Backend.init(data);
        /*
        Backend.gameData.populations.forEach(population => {
          console.log(population);
          console.log(population.id);
          console.log(population.needs);
        });
        Backend.products.forEach(product => {
          console.log(product);
          console.log(product.id);
          console.log(product.producers);
        });
        Backend.gameData.buildings.forEach(buildings => {
          console.log(buildings);
          console.log(buildings.id);
        });
        Backend.gameData.categories.forEach(category => {
          console.log(category);
          console.log(category.id);
          console.log(category.order);
          console.log(category.products);
        });*/
      },
    }
  }
  ;
</script>

<style lang="scss">
</style>
