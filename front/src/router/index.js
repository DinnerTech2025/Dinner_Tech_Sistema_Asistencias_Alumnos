import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/layouts/HomeView.vue'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/auth/Login.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: Dashboard
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
