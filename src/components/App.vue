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
          :populations="this.$store.state.populations"
      ></Populations>
      <Workforces
          text="Workforces"
          :workforces="this.$store.state.workforces"
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
      return {};
    },
    computed: {
      productCategoriesOrdered: function () {
        return Lodash.orderBy(this.$store.state.categories, ["order"]);
      }
    },
    methods: {
      getImage(path) {
        return require("../assets/img/" + path);
      },
    }
  }
  ;
</script>

<style lang="scss">
</style>
