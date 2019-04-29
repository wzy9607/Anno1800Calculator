import Vue from "vue";
import vueNumeralFilterInstaller from "vue-numeral-filter";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faChevronDown, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import BootstrapVue from "bootstrap-vue";

import "./styles/custom.scss";

import App from "./components/App.vue";
import store from "./store";
// data
import PopulationLevelsData from "./json/population_levels.json";
import ProductionBuildingsData from "./json/production_buildings.json";
import ProductsData from "./json/products.json";
import WorkforcesData from "./json/workforces.json";
import ProductCategoriesData from "./json/product_categories.json";
// calculator core
import Backend from "./backend.js";

library.add(faChevronRight, faChevronDown);

Vue.use(vueNumeralFilterInstaller, {locale: "en-gb"});
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

function init() {
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
    console.log(population.needTuples);
  });
  Backend.products.forEach(product => {
    console.log(product);
    console.log(product.id);
    console.log(product.producers);
  });
  Backend.gameData.buildings.forEach(building => {
    console.log(building);
    console.log(building.id);
    console.log(building.text);
    console.log(building.isChainEnd());
  });
  Backend.gameData.categories.forEach(category => {
    console.log(category);
    console.log(category.id);
    console.log(category.order);
    console.log(category.products);
  });*/
  return {data: Backend.gameData, dataMap: Backend.gameAssetsMap};
}

// noinspection ObjectAllocationIgnored,JSUnusedGlobalSymbols
new Vue({
          el: "#app",
          store,
          created() {
            let data = init();
            store.commit("init", {data: data.data, dataMap: data.dataMap});
          },
          render: h => h(App)
        });
