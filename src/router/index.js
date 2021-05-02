import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/citations',
    name: 'WorksCited',
    component: () => import(/* webpackChunkName: "about" */ '../views/WorksCited.vue')
  },
  {
    path: '/chrome',
    name: 'Chrome',
    component: () => import(/* webpackChunkName: "about" */ '../views/Chrome.vue')
  },
  {
    path: '/android',
    name: 'Android',
    component: () => import(/* webpackChunkName: "about" */ '../views/Android.vue')
  },
  {
    path: '/ceo',
    name: 'Ceo',
    component: () => import(/* webpackChunkName: "about" */ '../views/Ceo.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
