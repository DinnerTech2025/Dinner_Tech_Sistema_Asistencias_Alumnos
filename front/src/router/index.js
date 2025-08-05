import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/layouts/HomeView.vue'
import Dashboard from '@/views/Dashboard.vue'
import Login from '@/views/auth/Login.vue'
import Usuarios from '../views/Usuarios.vue'
import Niveles from '../views/Niveles.vue'
import Grados from '../views/Grados.vue'
import Cursos from '../views/Cursos.vue'
import Profesores from '../views/Profesores.vue'
import Estudiantes from '../views/Estudiantes.vue'
import Reportes from '../views/Reportes.vue'
import Apoderados from '../views/Apoderados.vue'
import Asistencia from '../views/Asistencia.vue'


const routes = [
  {
    path: '/',
    component: HomeView,
    children: [
      {
        path: '',
        name: 'dashboard',
        component: Dashboard
      },
      {
        path: '/usuarios',
        name: 'usuarios',
        component: Usuarios
      },
      {
        path: '/niveles',
        name: 'niveles',
        component: Niveles
      },
      {
        path: '/grados',
        name: 'grados',
        component: Grados
      },
      {
        path: '/cursos',
        name: 'curso',
        component: Cursos
      },
      {
        path: '/profesores',
        name: 'profesores',
        component: Profesores
      },
      {
        path: '/estudiantes',
        name: 'estudiantes',
        component: Estudiantes
      },
      {
        path: '/reportes',
        name: 'reportes',
        component: Reportes
      },
      {
        path: '/apoderados',
        name: 'apoderados',
        component: Apoderados
      },
      {
        path: '/asistencias',
        name: 'asistencias',
        component: Asistencia
      },
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
