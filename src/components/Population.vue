<template>
  <b-card
      no-body
      class="h-100"
      style="width: 8rem;"
  >
    <b-card-body class="text-center">
      <!--TODO b-card-img set width to 100%, customize it-->
      <div class="card-image">
        <img
            :src="getImage(icon)"
            :alt="text"
        >
      </div>
      <b-card-title
          title-tag="h6"
      >
        {{ text }}
      </b-card-title>
      <b-card-text class="card-input-amount mx-auto">
        <div class="input-group">
          <input
              v-model.number="displayedAmount"
              type="text"
              class="form-control text-right font-weight-semibold"
          />
          <div class="input-group-append">
            <img
                class="in-text-image"
                :src="getImage('resources/population.png')"
                alt="Population"
            >
          </div>
        </div>
      </b-card-text>
    </b-card-body>
  </b-card>
</template>

<script>
  export default {
    name: "Population",
    props: {
      icon: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      population: {
        type: Object,
        required: true
      }
    },
    data() {
      return {};
    },
    computed: {
      displayedAmount: {
        get() {
          return this.population.amount;
        },
        set(newValue) {
          this.updateAmount(newValue);
        }
      }
    },
    created: function () {
    },
    methods: {
      getImage(path) {
        return require("../assets/img/" + path);
      },
      updateAmount: function (newAmount) {
        if (newAmount >= 0) {
          this.population.updateAmount(newAmount);
        }
      },
      increaseAmount: function () {
        this.displayedAmount += 1;
      },
      decreaseAmount: function () {
        this.displayedAmount -= 1;
      },
    }
  };
</script>

<style lang="scss" scoped>
</style>
