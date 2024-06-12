import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue';
//Vistas de usuario
import UserDashboard from '../views/UserDashboard.vue';
import Agenda from '../views/Agenda.vue';
import Email from '../views/Email.vue';
import Visualizar from '../views/Visualizar.vue';
//Vistas de administrador
import AdminDashboard from '../views/viewsAdmin/AdminDashboard.vue';

Vue.use(VueRouter)

const routes = [
  // Ruta principal, Login
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/AdminDashboard',
    name: 'AdminDashboard',
    component: AdminDashboard,
    meta: { requiresAuth: true, role: 'admin' }
  },
  {
    path: '/UserDashboard',
    name: 'UserDashboard',
    component: UserDashboard,
    meta: { requiresAuth: true, role: 'user' }
  },
  {
    path: '/agenda',
    name: 'Eventos',
    component: Agenda,
    meta: { requiresAuth: true, role: 'user' }
  },
  {
    path: '/email',
    name: 'Redactar Correo',
    component: Email,
    meta: { requiresAuth: true, role: 'user' }
  },
  {
    path: '/vigency',
    name: 'Vigencias',
    component: Visualizar,
    meta: { requiresAuth: true, role: 'user' }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// Lógica de autenticación y autorización
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn'); 
  const userType = localStorage.getItem('userType');

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/');
  } else if (to.meta.requiresAuth && to.meta.role && to.meta.role !== userType) {
    next('/');
  } else {
    next();
  }
});

export default router;