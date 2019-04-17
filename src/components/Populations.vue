<template>
  <div>
    <h3>
      {{ text }}
    </h3>
    <div class="card">
      <div class="card-body">
        <b-card-group deck>
          <div
              v-for="population in populations"
              :key="population.id"
          >
            <Population
                :icon="population.icon"
                :text="population.text"
                :population="population"
            >
            </Population>
          </div>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
  import Population from "./Population.vue";
  
  export default {
    name: "Populations",
    components: {
      Population
    },
    props: {
      text: {
        type: String,
        required: true
      },
      populations: {
        type: Array,
        required: true
      }
    },
    created: function () {
      this.init();
    },
    methods: {
      getImage(path) {
        return require("../assets/img/" + path);
      },
      init: function () {
        let self = this;
        self.populations.forEach(population => {
          population.displayAmount = 0;
        });
      },
      updatePopulationAmount: function (displayedAmount, population) {
        if (displayedAmount >= 0) {
          population.updateAmount(displayedAmount);
        } else {
          //TODO reject negative value
        }
      },
      increasePopulationAmount: function (population) {
        population.displayAmount = population.amount + 1;
        population.updateAmount(population.amount + 1);
      },
      decreasePopulationAmount: function (population) {
        population.displayAmount = population.amount - 1;
        population.updateAmount(population.amount - 1);
      },
    }
  };
</script>

<style lang="scss" scoped>
</style>
