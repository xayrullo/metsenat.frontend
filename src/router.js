import Vue from 'vue'
import VueRouter from 'vue-router'
import { initErrorHandler } from './utils/error-handler'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "home" */ './views/home.vue')
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: () => import(/* webpackChunkName: "sign-in" */ './views/sign-in.vue')
  },
  {
    path: '/monitoring',
    name: 'monitoring',
    component: () => import(/* webpackChunkName: "monitoring" */ './views/monitoring.vue')
  },
  {
    path: '/monitoring',
    name: 'monitoring',
    component: () => import('./views/monitoring'),
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('./views/monitoring/dashboard'),
        children: []
      },
      {
        path: 'sponsors',
        name: 'sponsors',
        component: () => import('./views/monitoring/sponsors.vue'),
        children: [
          {
            path: '',
            name: 'sponsors-list',
            component: () => import('./views/monitoring/sponsors/index')
          },
          {
            path: ':index',
            name: 'sponsors-detail',
            component: () => import('./views/monitoring/sponsors/detail')
          }
        ]
      },
      {
        path: 'students',
        name: 'students',
        component: () => import('./views/monitoring/students.vue'),
        children: [
          {
            path: '',
            name: 'students-list',
            component: () => import('./views/monitoring/students/index')
          },
          {
            path: ':index',
            name: 'students-detail',
            component: () => import('./views/monitoring/students/detail')
          }
        ]
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

initErrorHandler(router)

export default router
