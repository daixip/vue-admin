//引入cookie
import cookie from 'vue-cookies'
export function getToken(){
    return cookie.get('adminToken')
}
export function setToken(){
    return cookie.set('adminToken',token)
}
export function getUserName(){
    return cookie.get('userName')
}
export function setUserName(){
    return cookie.set('userName',userName)
}