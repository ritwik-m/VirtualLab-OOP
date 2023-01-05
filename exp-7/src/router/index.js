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
      path: '/up-down-cast',
      name: 'up-down-cast',
      component: () => import('../views/UpDownCastView.vue')
    },
    {
      path: '/abstraction',
      name: 'abstraction',
      component: () => import('../views/AbstractionView.vue')
    },
    {
      path: '/method-completion',
      name: 'method-completion',
      component: () => import('../views/MethodCompletionView.vue')
    },
    {
      path: '/method-completion-execution',
      name: 'method-completion-execution',
      component: () => import('../views/MethodCompletionExecutionView.vue')
    }
  ]
})

export default router
