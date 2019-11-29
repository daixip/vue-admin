import {login} from '@/api/login.js'
import {removeToken,setToken,removeUserName,setUserName,getUserName} from '@/utils/getToken'
const state={
      isCollapse:JSON.parse(sessionStorage.getItem('isCollapse'))||false,
      token:'',
      userName:getUserName()||''
}
const mutations={
      SET_COLLAPSE(state){
            state.isCollapse=!state.isCollapse;
            sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
      },
      SET_TOKEN(state,value){
            state.token=value
      },
      SET_USERNAME(state,value){
            state.username=value
      },
      SET_USERNAME(state, value){
            state.username = value
      }
}
const actions={
      //登录
      login({ commit }, repuestData) {
            return new Promise((resolve, reject) => {
                Login(repuestData).then((response) => {
                    console.log(response)
                    let data = response.data.data
                    // 普通的
                    // content.commit('SET_TOKEN', data.toKen);
                    // content.commit('SET_USERNAME', data.username);
                    // 解构的
                    commit('SET_TOKEN', data.token);
                    commit('SET_USERNAME', data.username);
                    setToKen(data.token);
                    setUserName(data.username);
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },
        exit({ commit }){
            return new Promise((resolve, reject) => {
                removeToKen();
                removeUserName();
                commit('SET_TOKEN', '');
                commit('SET_USERNAME', '');
                resolve();
            })
            
        }
}
const modules={
     
}
export default {
      namespaced: true,
      state,
      mutations,
      actions,
      modules
};
