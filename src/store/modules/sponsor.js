import AxiosInit from '../../utils/axios_init'
export default {
  state: {
    sponsors: [],
    pending: false
  },
  getters: {
    pendingSponsor: state => state.pending,
    getSponsors: state => state.sponsors
  },
  mutations: {
    PENDING (state, payload) {
      state.pending = payload
    },
    SET_SPONSORS (state, payload) {
      state.sponsors = payload
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
            commit('PENDING', false)
          })
      })
    },
    async getSponsors ({ commit }, payload) {
      commit('PENDING', true)
      return new Promise((resolve, reject) => {
        AxiosInit
          .get('/sponsor-list/', payload)
          .then(res => {
            const _res = res.results || res
            commit('SET_SPONSORS', _res)
            resolve(_res)
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
