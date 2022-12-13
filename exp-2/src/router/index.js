import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/PageOne.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'page-one',
      component: PageOne
    },
  ]
})

export default router
