<template>
  <b-card
      no-body
      class="h-100"
      style="width: 10rem;"
  >
    <b-card-body class="text-center px-3 py-2">
      <!--TODO handle multiple producer-->
      <div class="card-image">
        <img
            :src="getImage(producer.icon)"
            :alt="producer.text"
        >
      </div>
      <b-card-title
          title-tag="h6"
          class="font-weight-bold"
      >
        {{ producer.text }}
      </b-card-title>
      <b-card-text class="card-input-efficiency mx-auto">
        <div class="input-group">
          <input
              v-model.number="displayedEfficiency"
              type="text"
              class="form-control text-right"
              @input="updateEfficiency(displayedEfficiency, producer)"
          />
          <div class="input-group-append">
            <span class="input-group-text">%</span>
          </div>
        </div>
      </b-card-text>
      <b-card-text class="font-weight-bold">
        {{ producer.amount }}
      </b-card-text>
      <b-card-text class="text-left">
        <small>
          Produce {{ amountProduced }} t/min<br>
          Consume {{ amountConsumed }} t/min
        </small>
      </b-card-text>
    </b-card-body>
  </b-card>
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
      };
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
