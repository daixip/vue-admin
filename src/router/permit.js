import router from './index';
import {getToken,removeToken,removeUserName} from '@/utils/getToken.js';
import store from '../store/index'
//定义白名单，防止next()中带参数跳转的时候出现死循环
const white=['/login']
router.beforeEach((to,from,next)=>{
    //to:下一个页面（next中指向的页面）
    //from:上一个页面
    if(getToken()){
        console.log('token存在')
        
        if(to.path==='/login'){
            //用户跳到登录页面，清除token
            store.commit('SET_TOKEN','');
            store.commit('SET_USERNAME','');
            removeToken();
            removeUserName()
        }else{
            //根据用户角色，动态分配路由
            next()
        }
    }else{
        console.log('token不存在')
        /*
        1.直接进入index的时候，参数to被改成了'/index',触发路由指向，就会触发beforeEach
        2.再一次next('/login')指向login,再次发生路由跳转，触发beforeEach，to指向index
        3.进入白名单判断，有'/login',则直接执行next(),没有参数不会触发beforeEach
        */
        if(white.indexOf(to.path)!=-1){
            next()
        }else{
            next('/login')
        }
    }
})
