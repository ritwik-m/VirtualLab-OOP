import { createRouter, createWebHistory } from 'vue-router'
import ScreenOne from '../views/ScreenOne.vue'

const routes = [
  {
    path: '/',
    name: 'screen-one',
    component: ScreenOne
  },
  {
    path: '/screen-three',
    name: 'screen-three',
    component: () => import('../views/ScreenThree.vue')
  },
  {
    path: '/screen-four',
    name: 'screen-four',
    component: () => import('../views/ScreenFour.vue')
  },
  {
    path: '/screen-two',
    name: 'screen-two',
    component: () => import('../views/ScreenTwoNew.vue')
  },
  {
    path: '/completion',
    name: "CongratulationsPage",
    component: () => import('../views/CongratulationsPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
