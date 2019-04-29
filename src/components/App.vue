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
      <Populations text="Residents"></Populations>
      <Workforces text="Workforces"></Workforces>
      <div
          v-for="category in productCategoriesOrdered"
          :key="category.id"
      >
        <ProductCategory
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
