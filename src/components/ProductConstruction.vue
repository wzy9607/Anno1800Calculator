<template>
  <b-card
      no-body
      class="h-100"
      style="width: 10rem;"
  >
    <b-card-body class="text-center">
      <!--TODO handle multiple producer-->
      <div class="card-image">
        <img
            :src="getImage(producer.icon)"
            :alt="producer.text"
        >
      </div>
      <b-card-title
          title-tag="h6"
      >
        {{ producer.text }}
      </b-card-title>
      <b-card-text class="card-input-efficiency mx-auto mb-2">
        <div class="input-group">
          <input
              v-model.number="displayedEfficiency"
              type="text"
              class="form-control text-right"
          />
          <div class="input-group-append">
            <span class="input-group-text">%</span>
          </div>
        </div>
      </b-card-text>
      <b-card-text class="card-input-amount mx-auto mb-2">
        <div class="input-group">
          <input
              v-model.number="displayedAmount"
              type="text"
              class="form-control text-right font-weight-semibold"
          />
          <!--TODO Add +-1 button-->
        </div>
      </b-card-text>
      <b-card-text class="text-left">
        <small>
          Produce {{ amountProduced | numeral("0,0[.][0000]") }} t/min
        </small>
      </b-card-text>
    </b-card-body>
  </b-card>
</template>

<script>
  export default {
    name: "ProductConstruction",
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
      };
    },
    computed: {
      displayedAmount: {
        get() {
          return this.producer.amount;
        },
        set(newValue) {
          this.updateAmount(newValue);
        }
      },
      displayedEfficiency: {
        get() {
          return this.producer.percentEfficiency;
        },
        set(newValue) {
          this.updateEfficiency(newValue);
        }
      }
    },
    created: function () {
    },
    methods: {
      getImage(path) {
        return require("../assets/img/" + path);
      },
      updateEfficiency: function (newEfficiency) {
        if (newEfficiency > 0) {
          this.producer.setPercentEfficiency(newEfficiency);
        }
      },
      updateAmount: function (newAmount) {
        if (newAmount >= 0) {
          this.producer.setAmount(newAmount);
        }
      },
    }
  };
</script>

<style lang="scss" scoped>
</style>
