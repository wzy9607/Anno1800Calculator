<template>
  <div
      class=""
  >
    <h2>Inhabitants</h2>
    <div class="card">
      <div class="card-body">
        <div class="card-deck">
          <div
              v-for="population in populations"
              :key="population.id"
          >
            <div
                class="card text-center"
                style="width: 10rem;"
            >
              <div class="card-body">
                <div class="card-image">
                  <img
                      :src="getImage(population.icon)"
                      :alt="population.text"
                  >
                </div>
                <h5 class="card-title">{{ population.text }}</h5>
              </div>
              <div class="card-input-amount">
                <div class="input-group mb-3">
                  <input
                      v-model.number="population.displayAmount"
                      type="number"
                      class="form-control text-right"
                      @input="updatePopulationAmount(population.displayAmount, population)"
                  />
                  <!--
                  <div class="input-group-append">
                    <div class="btn-group-vertical">
                      <button
                          class="btn btn-secondary"
                          type="button"
                          @click="increasePopulationAmount(population)"
                      >
                        <i class="fas fa-caret-up"></i>
                      </button>
                      <button
                          class="btn btn-secondary"
                          type="button"
                          @click="decreasePopulationAmount(population)"
                      >
                        <i class="fas fa-caret-down"></i>
                      </button>
                    </div>
                  </div>
                  -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Populations",
    props: {
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
