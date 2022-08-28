import AxiosInit from '../../utils/axios_init'
export default {
  state: {
    dashboard: {},
    pending: false
  },
  getters: {
    getDashboard: state => state.dashboard
  },
  mutations: {
    PENDING (state, payload) {
      state.pending = payload
    },
    SET_DASHBOARD (state, payload) {
      state.dashboard = payload
    }
  },
  actions: {
    async getDashboard ({ commit }) {
      commit('PENDING', true)
      return new Promise((resolve, reject) => {
        AxiosInit
          .get('/dashboard/')
          .then(res => {
            commit('SET_DASHBOARD', res)
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
          .finally(() => {
            commit('PENDING', false)
          })
      })
    }
  }
}
