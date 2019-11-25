import {login} from '@/api/login.js'
import {removeToken,setToken,getUserName,setUserName,removeUserName} from '@/utils/getToken'
const state={
      isCollapse:JSON.parse(sessionStorage.getItem('isCollapse'))||false,
      token:'',
      username:getUserName()||''
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
      }
}
const actions={
      Login({commit},data){
            return new Promise((resolve,reject)=>{
                  login(data).then(response=>{
                        const result = response.data.data
                        commit('SET_TOKEN',result.token)
                        commit('SET_USERNAME',result.username)
                        setToken(result.token);
                        setUserName(result.username);
                        resolve(response)
                  }).catch(error=>{
                        reject(error)
                  })
            })
       },
       exists({commit}){
          return new Promise((resolve,reject)=>{
            removeToken();
            removeUserName();
            commit('SET_TOKEN','');
            commit('SET_USERNAME','');
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
