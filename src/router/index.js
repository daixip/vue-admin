import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"login",
    hidden:true,
    meta:{
      name:'主页',
      icon:'el-icon-s-custom'
    }
  },
  {
    path: '/login',
    name: 'login',
    hidden:true,
    component: () => import('../views/login/index.vue'),
    meta:{
      name:'登录',
      icon:'el-icon-video-camera-solid'
    }
  },
  {
    path: '/console',
    name: 'console',
    meta:{
      name:'控制台',
      icon:'el-icon-s-home'
    },
    component: () => import('../views/layout/index.vue'),
    children:[
      {
        path:'/consoleIndex',
        name:'consoleIndex',
        component: () => import('../views/console/index.vue'),
        meta:{
          name:'首页'
        }
      }
    ]
  },
  {
    path: '/news',
    name: 'news',
    meta:{
      name:'信息管理',
      icon:'el-icon-s-marketing'
    },
    component: () => import('../views/layout/index.vue'),
    children:[
      {
        path:'/newsIndex',
        name:'newsIndex',
        component: () => import('../views/News/index.vue'),
        meta:{
          name:'信息列表',
        }
      },
      {
        path:'/newsCategory',
        name:'newsCategory',
        component: () => import('../views/News/category.vue'),
        meta:{
          name:'信息分类',
          icon:'el-icon-s-fold'
        }
      },
    ]
  },
  {
    path: '/user',
    name: 'user',
    component: () => import('../views/layout/index.vue'),
    meta:{
      name:'用户管理',
      icon:'el-icon-s-grid'
    },
    children:[
      {
        path:'/userIndex',
        name:'userIndex',
        meta:{
          name:'用户信息',
        },
        component:()=>import ('../views/user/index.vue')
      }
    ]
  },
  
]
const router = new VueRouter({
  routes
})

export default router
