<template>
  <b-card
      no-body
      class="h-100"
      style="width: 8rem;"
  >
    <b-card-body class="text-center">
      <!--TODO handle multiple producer-->
      <div class="card-image">
        <img
            :src="getImage(icon)"
            :alt="buildingName"
        >
      </div>
      <b-card-title
          title-tag="h6"
          class="min-h-2"
      >
        {{ buildingName }}
      </b-card-title>
      <b-card-text class="card-input-efficiency mx-auto mb-2">
        <div class="input-group">
          <input
              v-model.number="buildingEfficiency"
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
              v-model.number="buildingAmount"
              type="number"
              min="0"
              class="form-control text-right font-weight-semibold"
          />
          <!--TODO Add +-1 button-->
        </div>
      </b-card-text>
      <b-card-text class="text-left">
        <small>
          Produce {{ amountProduced | numeral("0,0[.][00]") }} t/min
        </small>
      </b-card-text>
    </b-card-body>
  </b-card>
</template>

<script>
  export default {
    name: "ProductConstruction",
    props: {
      text: { // TODO Reserved for i18n
        type: String,
        required: true
      },
      id: {
        type: Number,
        required: true
      },
      producerId: {
        type: Number,
        required: true
      },
      product: {
        type: Object,
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
      icon: function () {
        return this.product.icon;
      },
      amountProduced: function () {
        return this.product.userData.amountProduced;
      },
      amountConsumed: function () {
        return this.product.userData.amountConsumed;
      },
      buildingName: function () {
        return this.producer.text;
      },
      buildingAmount: {
        get() {
          return this.producer.userData.amount;
        },
        set(newValue) {
          this.$store.commit("updateAmount", {id: this.producerId, newAmount: newValue});
        }
      },
      buildingEfficiency: {
        get() {
          return this.producer.userData.percentEfficiency;
        },
        set(newValue) {
          this.$store.commit('updateEfficiency', {id: this.producerId, newEfficiency: newValue});
        }
      }
    },
    created: function () {
    },
    methods: {
      getImage: function(path) {
        return require("../assets/img/" + path);
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
