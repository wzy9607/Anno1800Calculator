import Vue from "vue";
import "es6-promise/auto";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
                               state: {
                                 count: 0
                               },
                               mutations: {
                                 increment(state) {
                                   state.count++;
                                 }
                               }
                             });
