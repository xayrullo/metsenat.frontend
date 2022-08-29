import AxiosInit from '../../utils/axios_init'
export default {
  state: {
    sponsors: [],
    pending: false
  },
  getters: {
    pendingStudent: state => state.pending,
    getStudents: state => state.sponsors
  },
  mutations: {
    PENDING (state, payload) {
      state.pending = payload
    },
    SET_STUDENTS (state, payload) {
      state.sponsors = payload
    }
  },
  actions: {
    async setStudent ({ commit }, payload) {
      commit('PENDING', true)
      return new Promise((resolve, reject) => {
        AxiosInit
          .post('/student-create/', payload)
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
    async getStudents ({ commit }, payload) {
      commit('PENDING', true)
      return new Promise((resolve, reject) => {
        AxiosInit
          .get('/student-list/', payload)
          .then(res => {
            const _res = res.results || res
            commit('SET_STUDENTS', _res)
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
