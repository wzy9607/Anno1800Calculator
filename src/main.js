import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import "./styles/custom.scss";
import vueNumeralFilterInstaller from "vue-numeral-filter";

import App from "./App.vue";

Vue.use(BootstrapVue);
Vue.use(vueNumeralFilterInstaller, {locale: "en-gb"});

Vue.config.productionTip = false;

// noinspection JSUnusedGlobalSymbols
new Vue({
          render: h => h(App)
        }).$mount("#app");
