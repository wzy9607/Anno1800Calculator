import Vue from "vue";
import "es6-promise/auto";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";
import Backend from "./backend";

Vue.use(Vuex);

const storeLocal = new VuexPersistence({
                                         storage: window.localStorage,
                                         reducer: (state) => ({
                                           userDataPopulations: state.userDataPopulations,
                                           userDataWorkforces: state.userDataWorkforces,
                                           userDataBuildings: state.userDataBuildings,
                                           userDataProducts: state.userDataProducts
                                         }),
                                       });

const store = new Vuex.Store({
                               state: {
                                 populations: [],
                                 workforces: [],
                                 buildings: [],
                                 categories: [],
                                 gameAssetsMap: {},
                                 userDataPopulations: [],
                                 userDataWorkforces: [],
                                 userDataBuildings: [],
                                 userDataProducts: [],
                                 userDataMap: {},
                                 // FIXME https://github.com/vuejs/vue/issues/2410#issuecomment-318487855
                                 userDataChangeTracker: 1,
                               },
                               getters: {
                                 userDataList: state => {
                                   return this.store.userDataChangeTracker && Array.from(state.userDataMap);
                                 }
                               },
                               mutations: {
                                 init(state, payload) {
                                   state.populations = payload.gameAssets.populations;
                                   state.workforces = payload.gameAssets.workforces;
                                   state.buildings = payload.gameAssets.buildings;
                                   state.categories = payload.gameAssets.categories;
                                   state.gameAssetsMap = payload.gameAssetsMap;
                                   state.userDataPopulations = payload.userData.populations;
                                   state.userDataWorkforces = payload.userData.workforces;
                                   state.userDataBuildings = payload.userData.buildings;
                                   state.userDataProducts = payload.userData.products;
                                   state.userDataMap = payload.userDataMap;
                                 },
                                 setDefaultUserData(state) {
                                   Backend.setDefaultUserData();
                                   this.store.userDataChangeTracker += 1;
                                 },
                                 updateAmount(state, payload) {
                                   if (payload.newAmount >= 0) {
                                     let asset = state.gameAssetsMap.get(payload.id);
                                     asset.updateAmount(payload.newAmount);
                                     this.store.userDataChangeTracker += 1;
                                   }
                                 },
                                 updateEfficiency(state, payload) {
                                   if (payload.newEfficiency > 0) {
                                     let asset = state.gameAssetsMap.get(payload.id);
                                     asset.setPercentEfficiency(payload.newEfficiency);
                                     this.store.userDataChangeTracker += 1;
                                   }
                                 },
                               },
                               actions: {},
                               plugins: [storeLocal.plugin],
                             });
export default store;
