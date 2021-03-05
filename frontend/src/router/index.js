import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  }, 
  {
    path: '/profile',
    name: 'Profile',
    component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue')
  }, 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  // Insertar luego de la siguiente línea
  { 
    path: '/users', 
    name: 'User', 
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue') 
  },
  { 
    path: '/projects', 
    name: 'Project', 
    component: () => import(/* webpackChunkName: "about" */ '../views/Project.vue') 
  },
  { 
    path: '/publications', 
    name: 'Publication', 
    component: () => import(/* webpackChunkName: "about" */ '../views/Publication.vue') 
  },

  { 
    path: '/newproject', 
    name: 'New Project', 
    component: () => import(/* webpackChunkName: "about" */ '../views/Project.vue') 
  },
  { 
    path: '/newpublication', 
    name: 'New Publication', 
    component: () => import(/* webpackChunkName: "about" */ '../views/Publication.vue') 
  },

  { 
    path: '/publication/postulants', 
    name: 'Postulants', 
    component: () => import(/* webpackChunkName: "about" */ '../views/Postulant.vue') 
  },

  {
  path: '/dashboard',
  name: 'Dashboard',
  component:() => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue')
  },
  {
  path: '/getprjct',
  name: 'GetProjects',
  component:() => import(/* webpackChunkName: "about" */ '../views/GetProjects.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
