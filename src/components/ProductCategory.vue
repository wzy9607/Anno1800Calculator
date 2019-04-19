<template>
  <div class="mx-4 my-4">
    <!--FIXME collapser not working-->
    <h3>
      <b-button
          :v-b-toggle="'collapse-' + id"
          variant="light"
      >
        <span class="when-opened"><i class="fas fa-chevron-right"></i></span>
        <span class="when-closed"><i class="fas fa-chevron-down"></i></span>
      </b-button>
      {{ text }}
    </h3>
    <b-collapse
        :id="'collapse-' + id"
        visible
    >
      <div class="border rounded p-3">
        <b-card-group deck>
          <div
              v-for="product in products"
              :key="product.id"
              class="card-margin-fix"
          >
            <!--TODO handle multiple producer-->
            <ProductConstruction
                v-if="id===11707"
                :amount-produced="product.amountProduced"
                :amount-consumed="product.amountConsumed"
                :producer="product.producers[0].producer"
            ></ProductConstruction>
            <Product
                v-else
                :amount-produced="product.amountProduced"
                :amount-consumed="product.amountConsumed"
                :producer="product.producers[0].producer"
            ></Product>
          </div>
        </b-card-group>
      </div>
    </b-collapse>
  </div>
</template>

<script>
  import Product from "./Product.vue";
  import ProductConstruction from "./ProductConstruction.vue";
  
  export default {
    name: "ProductCategory",
    components: {
      Product,
      ProductConstruction
    },
    props: {
      id: {
        type: Number,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      products: {
        type: Array,
        required: true
      }
    },
    created: function () {
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
</style>
