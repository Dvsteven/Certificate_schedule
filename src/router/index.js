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
//subvistas de aadmin
import WindowsLicencias from '../views/viewsAdmin/Licencias/WindowsLicencias.vue';
import OfficeLicencias from '../views/viewsAdmin/Licencias/OfficeLicencias.vue';
import AppaLicencias from '../views/viewsAdmin/Licencias/AppaLicencias.vue';
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
  //Subrutas de admin
  {path: '/viewsAdmin/Licencias/WindowsLicencias', name: 'licencia_windows', component: WindowsLicencias, meta: { requiresAuth: true }},
  {path: '/viewsAdmin/Licencias/OfficeLicencias', name: 'licencia_Office', component:OfficeLicencias, meta: { requiresAuth: true }},
  {path: '/viewsAdmin/Licencias/AppaLicencias', name: 'licencia_Appa', component: AppaLicencias, meta: { requiresAuth: true }}
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
