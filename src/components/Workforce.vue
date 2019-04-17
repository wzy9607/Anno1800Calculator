<template>
  <b-card
      no-body
      class="h-100"
      style="width: 10rem;"
  >
    <b-card-body class="text-center pl-3 pr-3">
      <div class="card-image">
        <img
            :src="getImage(icon)"
            :alt="text"
        >
      </div>
      <b-card-title title-tag="h5">
        {{ text }}
      </b-card-title>
      <b-card-text class="font-weight-bold">
        {{ amount }}
      </b-card-text>
    </b-card-body>
  </b-card>
</template>

<script>
  export default {
    name: "Workforce",
    props: {
      icon: {
        type: String,
        required: true
      },
      text: {
        type: String,
        required: true
      },
      amount: {
        type: Number,
        required: true
      },
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
