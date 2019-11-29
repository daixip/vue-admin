const state={
      isCollapse:JSON.parse(sessionStorage.getItem('isCollapse'))||false,
     
}
const mutations={ // 必须的  同步 没有回调处理事情
      SET_COLLAPSE(state){
            state.isCollapse=!state.isCollapse;
            sessionStorage.setItem('isCollapse',JSON.stringify(state.isCollapse))
      }
}
const actions={
     
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
