import AxiosInit from '../../utils/axios_init'
export default {
  state: {
    token: null,
    user: {},
    loading: false,
    error: null
  },
  getters: {
    token: state => state.token,
    user: state => state.user,
    fetchToken: state => state.loading,
    authError: state => state.error
  },
  mutations: {
    SET_TOKEN (state, payload) {
      state.token = payload
    },
    FETCH_TOKEN (state, payload) {
      state.loading = payload
    },
    REMOVE_TOKEN (state, payload) {
      state.token = payload
    },
    SET_USER (state, payload) {
      state.user = payload
    },
    ERROR_AUTH (state, payload) {
      state.error = payload
    }
  },
  actions: {
    setUser ({ commit, dispatch }, payload) {
      commit('FETCH_TOKEN', true)
      return new Promise((resolve, reject) => {
        AxiosInit
          .post('/auth/login/', payload)
          .then(res => {
            commit('SET_TOKEN', res.jwt)
            commit('SET_USER', res.user)
            localStorage.setItem('token', res.jwt)
            localStorage.setItem('user', JSON.stringify(res.user))
            resolve()
          })
          .catch(() => {
            // eslint-disable-next-line prefer-promise-reject-errors
            reject()
          })
          .finally(() => {
            commit('FETCH_TOKEN', false)
          })
      })
    },
    async signOut ({ commit }) {
      commit('REMOVE_TOKEN', null)
      await localStorage.removeItem('token')
      await localStorage.removeItem('user')
      return 'Token Deleted'
    }
  }
}
