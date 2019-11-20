import service from '@/utils/request.js'
//验证码
export function getSms(data){
    // 发送 POST 请求
    return  service.request({
                method: 'post',
                url: '/getSms/',
                data
            });
}
//获取用户角色
//注册
export function register(data){
    return service.request({
        method:'post',
        url:'/register/',
        data
    })
}
//登录
export function login(data){
    return service.request({
        method:'post',
        url:'/login/',
        data
    })
}

