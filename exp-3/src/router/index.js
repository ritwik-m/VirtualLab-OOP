import { createRouter, createWebHistory } from 'vue-router'
import ScreenOne from '../views/ScreenOne.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'screen-one',
      component: ScreenOne
    },
    {
      path: '/screen-two',
      name: 'screen-two',
      component: () => import('../views/ScreenTwo.vue')
    },
    {
      path: '/screen-three',
      name: 'screen-three',
      component: () => import('../views/ScreenThree.vue')
    },
    {
      path: '/completion',
      name: 'completion',
      component: () => import('../views/CongratulationsPage.vue')
    }
  ]
})

export default router
