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
  ]
})

export default router
