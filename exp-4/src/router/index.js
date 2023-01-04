import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/CodeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'class-diagram',
      component: () => import('../views/ClassDiagramFill.vue')
    },
    {
      path: '/code',
      name: 'code',
      component: () => HomeView
    },
    {
      path : '/output',
      name: 'output',
      component : () => import('../views/Output.vue')
    },
    {
      path : '/completion',
      name: 'completion',
      component : () => import('../views/CongratulationsPage.vue')
    }
    
  ]
})

export default router
