import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue'
import Agenda from '../views/Agenda.vue'
import Visualizar from '../views/Visualizar.vue'
import Projects from '../views/Projects.vue'
import Team from '../views/Team.vue'

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
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/agenda',
    name: 'agenda',
    component: Agenda
  },
  {
    path: '/vigency',
    name: 'Vigencias',
    component: Visualizar
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/team',
    name: 'team',
    component: Team
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
