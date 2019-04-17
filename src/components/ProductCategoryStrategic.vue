<template>
  <div>
    <!--FIXME collapser not working-->
    <h3>
      <b-button
          :v-b-toggle="'collapse-' + id"
          variant="primary"
      >
        <span class="when-closed"><i class="fas fa-chevron-right"></i></span>
        <span class="when-opened"><i class="fas fa-chevron-down"></i></span>
      </b-button>
      {{ text }}
    </h3>
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
              <div
                  class="card text-center"
                  style="width: 10rem;"
              >
                <!--TODO Remove?-->
                <div class="card-body">
                  <div class="">
                    <img
                        :src="getImage(product.icon)"
                        :alt="product.text"
                        width="64"
                        height="64"
                    >
                  </div>
                  <h5 class="card-title">
{{ product.text }}
</h5>
                  <div class="card-text">
                    <span>Produce {{ product.amountProduced }} ton/min</span>
                  </div>
                  <div class="card-text">
                    <span>Consume {{ product.amountConsumed }} ton/min</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
  export default {
    name: "ProductCategoryStrategic",
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
    methods: {
      getImage(path) {
        return require("../assets/img/" + path);
      },
    }
  };
</script>

<style lang="scss" scoped>
</style>
