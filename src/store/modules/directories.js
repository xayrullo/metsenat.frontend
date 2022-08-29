import AxiosInit from '../../utils/axios_init'
export default {
  state: {
    tariffs: [],
    payment_typies: [],
    pending: false
  },
  getters: {
    pendingDirectory: state => state.pending,
    getTariffs: state => state.tariffs,
    getPaymentTypies: state => state.payment_typies
  },
  mutations: {
    PENDING (state, payload) {
      state.pending = payload
    },
    SET_TARIFFS (state, payload) {
      state.tariffs = payload
    },
    SET_PAYMENT_TYPIES (state, payload) {
      state.payment_typies = payload
    }
  },
  actions: {
    async getTariffs ({ commit }, payload) {
      commit('PENDING', true)
      return new Promise((resolve, reject) => {
        AxiosInit
          .get('/tariff-list/', payload)
          .then(res => {
            const _res = res.results || res
            commit('SET_TARIFFS', _res)
            resolve(_res)
          })
          .catch(error => {
            reject(error)
          })
          .finally(() => {
            commit('PENDING', false)
          })
      })
    },
    async getPaymentTypies ({ commit, state }, payload) {
      commit('PENDING', true)
      return new Promise((resolve, reject) => {
        if (state.payment_typies.length > 0) return
        AxiosInit
          .get('/payment-type-list/', payload)
          .then(res => {
            const _res = res.results || res
            commit('SET_PAYMENT_TYPIES', _res)
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
