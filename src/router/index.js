import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"login"
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/console',
    name: 'console',
    component: () => import('../views/layout/index.vue'),
    children:[
      {
        path:'/consoleIndex',
        name:'consoleIndex',
        component: () => import('../views/console/index.vue'),
      }
    ]
  },
]
const router = new VueRouter({
  routes
})

export default router
