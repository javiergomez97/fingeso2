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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { 
    path: '/user', 
    name: 'User', 
    component: () => import(/* webpackChunkName: "about" */ '../views/User.vue') 
  },
  { 
    path: '/project', 
    name: 'Project', 
    component: () => import(/* webpackChunkName: "about" */ '../views/Project.vue') 
  },
  { 
    path: '/publication', 
    name: 'Publication', 
    component: () => import(/* webpackChunkName: "about" */ '../views/Publication.vue') 
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router

