import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './utils/libraries'
import './utils/tools'
import './utils/constants'
import './utils/components'

import './assets/css/tailwind.css'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
