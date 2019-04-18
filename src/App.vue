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
          :populations="gameDataView.populations"
      ></Populations>
      <Workforces
          text="Workforces"
          :workforces="gameDataView.workforces"
      ></Workforces>
      <div
          v-for="category in productCategoriesOrdered"
          :key="category.id"
      >
        <!--TODO Construction Material-->
        <!--Construction material products-->
        <ProductCategoryConstruction
            v-if="category.id===11707"
            :id="category.id"
            :text="category.text"
            :products="category.products"
        ></ProductCategoryConstruction>
        <!--Strategic products-->
        <div v-else-if="category.id===11797"></div>
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
  import Populations from "./components/Populations.vue";
  import Workforces from "./components/Workforces.vue";
  import ProductCategory from "./components/ProductCategory.vue";
  import ProductCategoryConstruction from "./components/ProductCategoryConstruction.vue";
  // import ProductCategoryStrategic from "./components/ProductCategoryStrategic.vue";
  // data
  import PopulationLevelsData from "./json/population_levels.json";
  import ProductionBuildingsData from "./json/production_buildings.json";
  import ProductsData from "./json/products.json";
  import WorkforcesData from "./json/workforces.json";
  import ProductCategoriesData from "./json/product_categories.json";
  // calculator core
  import * as Core from "./core.js";
  // Load typeface
  require("source-sans-pro/source-sans-pro.css");
  
  export default {
    name: "App",
    components: {
      Populations,
      Workforces,
      ProductCategory,
      ProductCategoryConstruction,
      // ProductCategoryStrategic
    },
    data: function () {
      return {
        gameDataView: Core.view,
        gameAssetsMap: Core.gameAssetsMap
      };
    },
    computed: {
      productCategoriesOrdered: function () {
        return Lodash.orderBy(this.gameDataView.categories, ["order"]);
      }
    },
    created() {
      this.init();
    },
    methods: {
      getImage(path) {
        return require("./assets/img/" + path);
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
        Core.init(data);
        // FIXME The parsed game date of population aren't correct, manually correct them here.
        Core.view.populations.forEach(population => {
          switch (population.id) {
            case 15000000:
              population.needs.forEach(need => {
                if (need.amount !== undefined) {
                  need.amountPerConsumer *= 6.0;
                }
              });
              break;
            case 15000001:
              population.needs.forEach(need => {
                if (need.amountPerConsumer !== undefined) {
                  need.amountPerConsumer *= 3.0;
                }
              });
              break;
            case 15000002:
              population.needs.forEach(need => {
                if (need.amountPerConsumer !== undefined) {
                  need.amountPerConsumer *= 2.0;
                }
              });
              break;
            case 15000003:
              population.needs.forEach(need => {
                if (need.amountPerConsumer !== undefined) {
                  need.amountPerConsumer *= 1.5;
                }
              });
              break;
            case 15000004:
              population.needs.forEach(need => {
                if (need.amountPerConsumer !== undefined) {
                  need.amountPerConsumer *= 1.2;
                }
              });
              break;
            case 15000005:
              population.needs.forEach(need => {
                if (need.amountPerConsumer !== undefined) {
                  need.amountPerConsumer *= 6.0;
                }
              });
              break;
            case 15000006:
              population.needs.forEach(need => {
                if (need.amountPerConsumer !== undefined) {
                  need.amountPerConsumer *= 3.0;
                }
              });
              break;
          }
        });
        /*
        Core.view.populations.forEach(population => {
          console.log(population);
          console.log(population.id);
          console.log(population.needs);
        });
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
  }
  ;
</script>

<style lang="scss">
  #app {
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
