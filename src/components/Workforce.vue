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
      <b-card-text class="font-weight-semibold">
        {{ amount }}
      </b-card-text>
    </b-card-body>
  </b-card>
</template>

<script>
  export default {
    name: "Workforce",
    props: {
      text: { // TODO Reserved for i18n
        type: String,
        required: true
      },
      id: {
        type: Number,
        required: true
      },
      workforce: {
        type: Object,
        required: true
      }
    },
    computed: {
      icon: function () {
        return this.workforce.icon;
      },
      name: function () {
        return this.workforce.text;
      },
      amount: function () {
        return this.workforce.userData.amountConsumed;
      },
    },
    created: function () {
    },
    methods: {
      getImage: function(path) {
        return require("../assets/img/" + path);
      },
    },
  };
</script>

<style lang="scss" scoped>
</style>
