import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/screen-three',
      name: 'screen-three',
      component: () => import('../views/CompositionView.vue')
    },
    {
      path: '/screen-two',
      name: 'screen-two',
      component: () => import('../views/CompositionClassDiagram.vue')
    }
    
  ]
})

export default router