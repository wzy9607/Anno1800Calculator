<template>
  <!--Strategic products-->
  <div v-if="id===11797"></div>
  <!--TODO -->
  <div
      v-else
      class="mx-4 mb-2"
  >
    <h3>
      <b-button
          v-b-toggle="'collapse-' + id"
          variant="light"
      >
        <span class="when-opened"><font-awesome-icon icon="chevron-right" /></span>
        <span class="when-closed"><font-awesome-icon icon="chevron-down" /></span>
      </b-button>
      {{ text }}
    </h3>
    <b-collapse
        :id="'collapse-' + id"
        visible
    >
      <div class="border rounded">
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
