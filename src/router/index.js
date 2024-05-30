import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue'
import Agenda from '../views/Agenda.vue'
import Email from '../views/Email.vue'
import Visualizar from '../views/Visualizar.vue'

Vue.use(VueRouter)

const routes = [
  //Ruta principal, Login
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    name: 'Panel Principal',
    component: Dashboard,
  },
  {
    path: '/agenda',
    name: 'Eventos',
    component: Agenda,
  },
  {
    path: '/email',
    name: 'Redactar Correo',
    component: Email,
  },
  {
    path: '/vigency',
    name: 'Vigencias',
    component: Visualizar,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

//Un poco de logica javascript para simular el login con "LocalSotrage"
router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn'); 

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/');
  } else {
    next();
  }
});

export default router
