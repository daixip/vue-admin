//引入cookie
import cookie from 'vue-cookies'

export function getToken(){
    return cookie.get('adminToken')
}
export function setToken(token){
    return cookie.set('adminToken',token)
}
export function removeToken(token){
    return cookie.remove('adminToken',token)
}
export function getUserName(){
    return cookie.get('userName')
}
export function setUserName(userName){
    return cookie.set('userName',userName)
}
export function removeUserName(userName){
    return cookie.remove('userName',userName)
}