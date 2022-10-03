import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Function1',
    component: () => import('../views/Function1')
  },
  {
    path: '/func',
    name: 'Function2',
    component: () => import('../views/Function2')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
