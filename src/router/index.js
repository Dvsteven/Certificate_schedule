import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
//vistas de usuario
import Dashboard from '../views/UserDashboard.vue'
import Agenda from '../views/Agenda.vue'
import Email from '../views/Email.vue'
import Visualizar from '../views/Visualizar.vue'
// vistas de admin
import AdminDashboard from '../views/viewsAdmin/AdminDashboard.vue'
import Usuarios from '../views/viewsAdmin/Usuarios.vue'
import Reportes from '../views/viewsAdmin/Reportes.vue'
import AdminAgenda from '../views/viewsAdmin/Agenda.vue'
import Licencias from '../views/viewsAdmin/Licencias.vue'
import Certificados from '../views/viewsAdmin/Certificados.vue'
Vue.use(VueRouter)

const routes = [
  //Ruta principal, Login
  {path: '/', name: 'Login', component: Login,},
  {path: '/UserDashboard', name: 'Panel Principal', component: Dashboard, meta: { requiresAuth: true }},
  {path: '/agenda', name: 'Eventos', component: Agenda, meta: { requiresAuth: true }},
  {path: '/email', name: 'Redactar Correo', component: Email, meta: { requiresAuth: true }},
  {path: '/vigency', name: 'Vigencias', component: Visualizar, meta: { requiresAuth: true }},
  // Rutas de admin
  {path: '/viewsAdmin/dashboard', name: 'AdminDashboard', component: AdminDashboard, meta: { requiresAuth: true }},
  {path: '/viewsAdmin/usuarios', name: 'Usuarios', component: Usuarios, meta: { requiresAuth: true }},
  {path: '/viewsAdmin/reportes', name: 'Reportes', component: Reportes, meta: { requiresAuth: true }},
  {path: '/viewsAdmin/agenda', name: 'Agenda', component: AdminAgenda, meta: { requiresAuth: true }},
  {path: '/viewsAdmin/Licencias', name: 'Licencias', component: Licencias, meta: { requiresAuth: true }},
  {path: '/viewsAdmin/Certificados', name: 'Certificados', component: Certificados, meta: { requiresAuth: true }}  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn');

  if (to.matched.some(record => record.meta.requiresAuth) && !isLoggedIn) {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
