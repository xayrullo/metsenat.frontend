import Vue from 'vue'
import VueRouter from 'vue-router'

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
            name: 'sponsor-list',
            component: () => import('./views/monitoring/sponsors/index')
          },
          {
            path: ':index',
            name: 'sponsor-detail',
            component: () => import('./views/monitoring/sponsors/detail')
          }
        ]
      },
      {
        path: 'students',
        name: 'students',
        component: () => import('./views/monitoring/students'),
        children: []
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
