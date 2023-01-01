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
    }
    
  ]
})

export default router
