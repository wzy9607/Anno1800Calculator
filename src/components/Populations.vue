<template>
  <div class="mx-4 my-2">
    <h3>
      {{ text }}
    </h3>
    <div class="border rounded p-3">
      <b-card-group deck>
        <div
            v-for="population in populations"
            :key="population.id"
            class="card-margin-fix"
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
      }
    },
    computed: {
      populations: function () {
        return this.$store.state.populations;
      }
    },
    created: function () {
    },
    methods: {}
  };
</script>

<style lang="scss" scoped>
</style>
