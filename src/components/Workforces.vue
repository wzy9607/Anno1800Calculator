<template>
  <div
      id="view-workforces"
      class=""
  >
    <h2>
      <b-button
          v-b-toggle="'collapse-workforces'"
          variant="primary"
      >
        <span class="when-closed"><i class="fas fa-chevron-right"></i></span>
        <span class="when-opened"><i class="fas fa-chevron-down"></i></span>
      </b-button>
      Workforces
    </h2>
    <b-collapse
        id="collapse-workforces"
        class="mt-2"
        visible
    >
      <div class="card">
        <div class="card-body">
          <div class="card-deck">
            <div
                v-for="workforce in workforces"
                :key="workforce.id"
            >
              <div
                  class="card text-center"
                  style="width: 10rem;"
              >
                <div class="card-body">
                  <div class="card-image">
                    <img
                        :src="getImage(workforce.icon)"
                        :alt="workforce.text"
                    >
                  </div>
                  <h5 class="card-title">{{ workforce.text }}</h5>
                  <div class="card-text">
                    <span>{{ workforce.amountConsumed }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-collapse>
  </div>
</template>

<script>
  export default {
    name: "Workforces",
    props: {
      workforces: {
        type: Array,
        required: true
      }
    },
    methods: {
      getImage(path) {
        return require("../assets/img/" + path);
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
