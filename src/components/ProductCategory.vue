<template>
  <div class="">
    <h2>
      <b-button
          :v-b-toggle="'collapse-' + id"
          variant="primary"
      >
        <span class="when-closed"><i class="fas fa-chevron-right"></i></span>
        <span class="when-opened"><i class="fas fa-chevron-down"></i></span>
      </b-button>
      {{ text }}
    </h2>
    <b-collapse
        :id="'collapse-' + id"
        class="mt-2"
        visible
    >
      <div class="card">
        <div class="card-body">
          <div class="card-deck">
            <div
                v-for="product in products"
                :key="product.id"
            >
              <!--TODO handle multiple producer-->
              <Product
                  :amountProduced="product.amountProduced"
                  :amountConsumed="product.amountConsumed"
                  :producer="product.producers[0].producer"
              ></Product>
            </div>
          </div>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
  import Product from "./Product.vue";
  
  export default {
    name: "ProductCategory",
    components: {
      Product
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
    methods: {
      getImage(path) {
        return require("../assets/img/" + path);
      }
    }
  };
</script>

<style lang="scss" scoped>
  // Hiding and showing content in the toggle button based on collapse state
  .collapsed > .when-opened,
  :not(.collapsed) > .when-closed{
    display: none;
  }

</style>
