import Vue from 'vue'
import Vuex from 'vuex'
import sponsor from './modules/sponsor'
import auth from './modules/auth'
import dashboard from './modules/dashboard'
import students from './modules/students'
import directories from './modules/directories'

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
    auth,
    dashboard,
    students,
    directories
  }
})
