import Vue from "vue";
import vueNumeralFilterInstaller from "vue-numeral-filter";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faChevronDown, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import BootstrapVue from "bootstrap-vue";

import "./styles/custom.scss";

import App from "./App.vue";

library.add(faChevronRight, faChevronDown);

Vue.use(vueNumeralFilterInstaller, {locale: "en-gb"});
Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.use(BootstrapVue);

Vue.config.productionTip = false;

// noinspection JSUnusedGlobalSymbols
new Vue({
          render: h => h(App)
        }).$mount("#app");
