<template>
  <div
      id="view-product-categories"
      class=""
  >
    <!--FIXME for keys aren't working-->
    <div
        v-for="category in productCategories"
        :key="category.order"
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
    }
  };
</script>

<style lang="scss" scoped>

</style>
