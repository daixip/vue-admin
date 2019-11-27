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
            state.userName=value
      }
}
const actions={
      //登录
      Login({commit},data){
            return new Promise((resolve,reject)=>{
                  login(data).then(response=>{
                        const result = response.data.data;
                        commit('SET_TOKEN',result.token);
                        commit('SET_USERNAME',result.userName);
                        setToken(result.token);
                        setUserName(result.username);
                        resolve(response)
                  }).catch(error=>{
                        reject(error)
                  })
            })
       },
       //退出
       exist({commit}){
            commit('SET_TOKEN','');
            commit('SET_USERNAME','');
            removeUserName();
            removeToken()
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
