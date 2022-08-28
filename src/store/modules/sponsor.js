import AxiosInit from '../../utils/axios_init'
export default {
  state: {
    results: [],
    pending: false
  },
  getters: {
    pendingSponsor: state => state.pending
  },
  mutations: {
    PENDING (state, payload) {
      state.pending = payload
    }
  },
  actions: {
    async setSponsor ({ commit }, payload) {
      commit('PENDING', true)
      return new Promise((resolve, reject) => {
        AxiosInit
          .post('/sponsor-create/', payload)
          .then(res => {
            resolve(res)
          })
          .catch(error => {
            reject(error)
          })
          .finally(() => {
            commit('pending', false)
          })
      })
    }
  }
}
