import { createRouter, createWebHistory } from 'vue-router'
import ScreenOne from '../views/ScreenOne.vue'

const routes = [
  {
    path: '/',
    name: 'screen-one',
    component: ScreenOne
  },
  {
    path: '/screen-two',
    name: 'screen-two',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "screen-two" */ '../views/ScreenTwo.vue')
  },
  {
    path: '/screen-three',
    name: 'screen-three',
    component: () => import(/* webpackChunkName: "scren-three" */ '../views/ScreenThree.vue')
  },
  {
    path: '/screen-four',
    name: 'screen-four',
    component: () => import(/* webpackChunkName: "scren-three" */ '../views/ScreenFour.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
