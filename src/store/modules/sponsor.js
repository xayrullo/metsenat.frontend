import AxiosInit from '../../utils/axios_init'
export default {
  state: {
    sponsors: [],
    sponsor: {},
    pending: false,
    pagination: {}
  },
  getters: {
    pendingSponsor: state => state.pending,
    getSponsors: state => state.sponsors,
    getSponsorById: state => state.sponsor,
    getSponsorPagination: state => state.pagination
  },
  mutations: {
    PENDING (state, payload) {
      state.pending = payload
    },
    SET_SPONSORS (state, payload) {
      state.sponsors = payload
    },
    SET_SPONSOR_BY_ID (state, payload) {
      state.sponsor = payload
    },
    SET_PAGINATION (state, payload) {
      state.pagination = payload
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
    async updateSponsor ({ commit, dispatch }, payload) {
      commit('PENDING', true)
      return new Promise((resolve, reject) => {
        AxiosInit
          .put(`/sponsor-update/${payload.id}/`, payload.data)
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
            commit('SET_PAGINATION', {
              total: res.count,
              start: (payload.page - 1) * payload.page_size + 1,
              end: payload.page * payload.page_size < res.count ? payload.page * payload.page_size : res.count,
              page: payload.page,
              size: payload.page_size,
              count: Math.floor(res.count / payload.page_size) + (res.count % payload.page_size > 0 ? 1 : 0)
            })
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
    async getSponsorById ({ commit }, payload) {
      commit('PENDING', true)
      return new Promise((resolve, reject) => {
        AxiosInit
          .get(`/sponsor-detail/${payload.id}/`)
          .then(res => {
            const _res = res
            commit('SET_SPONSOR_BY_ID', _res)
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
