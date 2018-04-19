import Vuex from "vuex"
import Vue from "vue"
import actions from "./action.js"
import getters from "./getter.js"
import mutations from "./mutations.js"
import states from "./state.js"

console.log("store");
Vue.use(Vuex);
const store = new Vuex.Store({
    states,
    mutations,
    getters,
    actions
});
export default store;