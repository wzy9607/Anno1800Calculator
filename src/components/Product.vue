<template>
  <div
      class="card text-center"
      style="width: 12rem;"
  >
    <!--TODO handle multiple producer-->
    <div class="card-body">
      <div class="">
        <img
            :src="getImage(producer.icon)"
            :alt="producer.text"
            width="64"
            height="64"
        >
      </div>
      <h5 class="card-title">{{ producer.text }}</h5>
      <div class="card-text">
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
        <span>Produce {{ amountProduced }} ton/min</span>
      </div>
      <div class="card-text">
        <span>Consume {{ amountConsumed }} ton/min</span>
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
