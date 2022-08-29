import AxiosInit from '../../utils/axios_init'
export default {
  state: {
    students: [],
    student: {},
    pending: false,
    pagination: {}
  },
  getters: {
    pendingStudent: state => state.pending,
    getStudents: state => state.students,
    getStudentById: state => state.student,
    getStudentPagination: state => state.pagination
  },
  mutations: {
    PENDING (state, payload) {
      state.pending = payload
    },
    SET_STUDENTS (state, payload) {
      state.students = payload
    },
    SET_STUDENT_BY_ID (state, payload) {
      state.sponsor = payload
    },
    SET_PAGINATION (state, payload) {
      state.pagination = payload
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
    async getStudentById ({ commit }, payload) {
      commit('PENDING', true)
      return new Promise((resolve, reject) => {
        AxiosInit
          .get(`/student-detail/${payload.id}/`)
          .then(res => {
            const _res = res
            commit('SET_STUDENT_BY_ID', _res)
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
