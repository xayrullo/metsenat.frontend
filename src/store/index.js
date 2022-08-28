import Vue from 'vue'
import Vuex from 'vuex'
import sponsor from './modules/sponsor'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    sponsor,
    auth
  }
})
