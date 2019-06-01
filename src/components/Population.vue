<template>
  <b-card
      no-body
      class="h-100"
      style="width: 8rem;"
  >
    <b-card-body class="text-center">
      <div class="card-image">
        <img
            :src="getImage(icon)"
            :alt="name"
        >
      </div>
      <b-card-title
          title-tag="h6"
      >
        {{ name }}
      </b-card-title>
      <b-card-text class="card-input-amount mx-auto">
        <div class="input-group">
          <input
              v-model.number="amount"
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
      text: { // TODO Reserved for i18n
        type: String,
        required: true
      },
      id: {
        type: Number,
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
      icon: function () {
        return this.population.icon;
      },
      name: function () {
        return this.population.text;
      },
      amount: {
        get: function() {
          return this.population.userData.amount;
        },
        set: function(newValue) {
          this.$store.commit("updateAmount", {id: this.id, newAmount: newValue});
        }
      }
    },
    created: function() {
    },
    methods: {
      getImage: function(path) {
        return require("../assets/img/" + path);
      },
      increaseAmount: function() {
        this.amount += 1;
      },
      decreaseAmount: function() {
        this.amount -= 1;
      }
    }
  };
</script>

<style lang="scss" scoped>
</style>
