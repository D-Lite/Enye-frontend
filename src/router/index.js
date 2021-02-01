import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting

    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/API',
    beforeEnter() {location.href = 'https://api.enye.tech/v1/challenge/records'},
    name: 'API'
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('')
  },
  {
    path: '/ENYE',
    name: 'Enye',
    beforeEnter() {location.href = 'http://www.enye.tech/abouts'}

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import('')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
