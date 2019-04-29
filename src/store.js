import Vue from "vue";
import "es6-promise/auto";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
                               state: {
                                 populations: [],
                                 workforces: [],
                                 buildings: [],
                                 categories: [],
                                 dataMap: {}
                               },
                               getters: {},
                               mutations: {
                                 init(state, payload) {
                                   state.populations = payload.data.populations;
                                   state.workforces = payload.data.workforces;
                                   state.buildings = payload.data.buildings;
                                   state.products = payload.data.populations;
                                   state.categories = payload.data.categories;
                                   state.dataMap = payload.dataMap;
                                 }
                               },
                               actions: {}
                             });
export default store;
