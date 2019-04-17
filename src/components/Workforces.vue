<template>
  <div>
    <h3>
      <b-button
          v-b-toggle="'collapse-workforces'"
          variant="primary"
      >
        <span class="when-closed"><i class="fas fa-chevron-right"></i></span>
        <span class="when-opened"><i class="fas fa-chevron-down"></i></span>
      </b-button>
      {{ text }}
    </h3>
    <b-collapse
        id="collapse-workforces"
        class="mt-2"
        visible
    >
      <div class="card">
        <div class="card-body">
          <b-card-group deck>
            <div
                v-for="workforce in workforces"
                :key="workforce.id"
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
      },
      workforces: {
        type: Array,
        required: true
      }
    },
    created: function () {
    },
    methods: {},
  };
</script>

<style lang="scss" scoped>
</style>
