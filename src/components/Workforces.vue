<template>
  <div class="mx-4 my-4">
    <h3>
      <b-button
          v-b-toggle="'collapse-workforces'"
          variant="light"
      >
        <span class="when-opened"><font-awesome-icon icon="chevron-right" /></span>
        <span class="when-closed"><font-awesome-icon icon="chevron-down" /></span>
      </b-button>
      {{ text }}
    </h3>
    <b-collapse
        id="collapse-workforces"
        visible
    >
      <div class="border rounded p-3">
        <b-card-group deck>
          <div
              v-for="workforce in workforces"
              :key="workforce.id"
              class="card-margin-fix"
          >
            <Workforce
                :icon="workforce.icon"
                :text="workforce.text"
                :amount="workforce.amountConsumed"
            >
            </Workforce>
          </div>
        </b-card-group>
      </div>
    </b-collapse>
  </div>
</template>

<script>
  import Workforce from "./Workforce.vue";
  
  export default {
    name: "Workforces",
    components: {
      Workforce
    },
    props: {
      text: {
        type: String,
        required: true
      }
    },
    computed: {
      workforces: function () {
        return this.$store.state.workforces;
      }
    },
    created: function () {
    },
    methods: {},
  };
</script>

<style lang="scss" scoped>
</style>
