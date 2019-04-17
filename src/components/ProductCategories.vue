<template>
  <div
      class=""
  >
    <div
        v-for="category in productCategoriesOrdered"
        :key="category.id"
    >
      <!--TODO Construction Material-->
      <ProductCategoryStrategic
          v-if="category.id===11797"
          :id="category.id"
          :text="category.text"
          :products="category.products"
      ></ProductCategoryStrategic>
      <ProductCategory
          v-else
          :id="category.id"
          :text="category.text"
          :products="category.products"
      ></ProductCategory>
    </div>
  </div>
</template>

<script>
  import Lodash from "lodash";
  
  import ProductCategory from "./ProductCategory.vue";
  import ProductCategoryStrategic from "./ProductCategoryStrategic.vue";
  
  export default {
    name: "ProductCategories",
    components: {
      ProductCategory,
      ProductCategoryStrategic
    },
    props: {
      productCategories: {
        type: Array,
        required: true
      }
    },
    computed: {
      productCategoriesOrdered: function () {
        return Lodash.orderBy(this.productCategories, ["order"]);
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
