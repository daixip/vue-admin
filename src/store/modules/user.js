import {login} from '@/api/login.js'
import {getToken,setToken,getUserName,setUserName} from '@/utils/getToken'
const state={
      isCollapse:JSON.parse(sessionStorage.getItem('isCollapse'))||false,
      token:'',
      userName:''
}
const mutations={
      SET_COLLAPSE(state){
            state.isCollapse=!state.isCollapse;
            sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
      },
      SET_TOKEN(state){
            state.token=value
      },
      SET_USERNAME(state){
            state.userName=value
      }
}
const actions={
      Login({commit},data){
            return new Promise((resolve,reject)=>{
                  login(data).then(response=>{
                        const result = response.data.data
                        commit('SET_TOKEN',result.token)
                        commit('SET_USERNAME',result.userName)
                        resolve(response)
                  }).catch(error=>{
                        reject(error)
                  })
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
