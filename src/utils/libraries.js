import Vue from 'vue'
import VueMask from 'v-mask'
import Snotify, { SnotifyPosition } from 'vue-snotify'
import 'vue-snotify/styles/material.css'

const options = {
  toast: {
    position: SnotifyPosition.rightBottom,
    showProgressBar: false,
    timeout: 2000,
    titleMaxLength: 100
  }
}

Vue.use(VueMask)
Vue.use(Snotify, options)
