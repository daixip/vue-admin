import router from './index';
import {getToken} from '@/utils/getToken.js';
//定义白名单，防止next()中带参数跳转的时候出现死循环
const white=['/login']
router.beforeEach((to,from,next)=>{
    //to:下一个页面（next中指向的页面）
    //from:上一个页面
    if(getToken()){
        //动态路由，每个角色分配不同的菜单
        console.loh('token存在')
    }else{
        console.log('token不存在')
        /*
        1.直接进入index的时候，参数to被改成了'/index',触发路由指向，就会触发beforeEach
        2.再一次next('/login')指向login,再次发生路由跳转，触发beforeEach，to指向index
        3.进入白名单判断，有'/login',则直接执行next(),没有参数不会触发beforeEach
        */
        if(white.indexOf(to.path)!=-1){
            console.log(123)
            next()
        }else{
            next('/login')
        }
    }
})
