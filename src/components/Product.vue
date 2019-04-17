<template>
  <div
      class="card text-center"
      style="width: 10rem;"
  >
    <!--TODO handle multiple producer-->
    <div class="card-body">
      <div class="card-image">
        <img
            :src="getImage(producer.icon)"
            :alt="producer.text"
        >
      </div>
      <h5 class="card-title">{{ producer.text }}</h5>
      <div class="card-input-efficiency">
        <div class="input-group mb-3">
          <input
              v-model.number="displayedEfficiency"
              type="number"
              class="form-control text-right"
              @input="updateEfficiency(displayedEfficiency, producer)"
          />
          <div class="input-group-append">
            <span class="input-group-text">%</span>
          </div>
        </div>
      </div>
      <div class="card-text">
        <span>{{ producer.amount }}</span>
      </div>
      <div class="card-text">
        <span>Produce {{ amountProduced }} t/min</span>
      </div>
      <div class="card-text">
        <span>Consume {{ amountConsumed }} t/min</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Product",
    props: {
      amountProduced: {
        type: Number,
        required: true
      },
      amountConsumed: {
        type: Number,
        required: true
      },
      producer: {
        type: Object,
        required: true
      }
    },
    data() {
      return {
        displayedEfficiency: 100
      }
    },
    created: function () {
    },
    methods: {
      getImage(path) {
        return require("../assets/img/" + path);
      },
      updateEfficiency: function (displayedEfficiency, producer) {
        producer.setPercentEfficiency(displayedEfficiency);
      },
    }
  };
</script>

<style lang="scss" scoped>
</style>
