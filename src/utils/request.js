import axios from 'axios'
import store from '../store/index'
import { Message } from 'element-ui';
const   BASEURL= process.env.NODE_ENV === 'production' ? '' : '/devApi'
// 环境的切换
// if (process.env.NODE_ENV == 'development') {    
//   axios.defaults.baseURL = '/api';
// } else if (process.env.NODE_ENV == 'debug') {    
//   axios.defaults.baseURL = '';
// } else if (process.env.NODE_ENV == 'production') {    
//   axios.defaults.baseURL = 'http://api.123dailu.com/';
// }
// 请求超时时间
//axios.defaults.timeout = 10000;
//创建拦截器
const service = axios.create({
    baseURL: BASEURL,
    timeout: 15000,
});
// post请求头
service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
    // 即使本地存在token，也有可能token是过期的，所以在响应拦截器中要对返回状态进行判断
    // const token = store.state.token;        
    // token && (config.headers.Authorization = token);   
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 具体的状态码要与后台约定
  // if (response.status === 200) {            
  //   return Promise.resolve(response);        
  // } else {            
  //   return Promise.reject(response);        
  // } 
  return response;
 // }, function (error) {
    // 对响应错误做点什么
    // if(error.response.status){
    //   switch (err.response.status){
    //     //401未登录
    //     //未登录则跳转登录页面，并携带当前页面的路径
    //     //登录成功返回当前页面，这一步需要在登录页面操作
    //     case 401:
    //       router.replace({
    //         path:'/login',
    //         query:{redirect:router.currentRoute.fullPath}
    //       });
    //     break;
    //     //403token过期
    //     //登录过期对用户进行提示
    //     //清除本地的token和清空vuex中的token对象
    //     //跳转到登录页面
    //     case 403:
    //       Message({
    //         message: '登录过期，请重新登录',                        
    //         duration: 1000,
    //         showClose:true
    //       })
    //       //清除token
    //       localStorage.removeItem('token');
    //       store.commit('loginSuccess',null);
    //       // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
    //       setTimeout(()=>{
    //         router.replace({
    //           path:'/login',
    //           query:{
    //             redirect:router.currentRoute.fullPath
    //           }
    //         })
    //       },1000)
    //     break;
    //     // 404请求不存在   
    //     case 404:
    //       Message({
    //         message: '网络请求不存在',                        
    //         duration: 1000,
    //         showClose:true
    //       })
    //     break;
    //      // 其他错误，直接抛出错误提示   
    //     default:{
    //       Message({
    //         message: error.response.data.message,                        
    //         duration: 1000,
    //         showClose:true
    //       })
    //     }
    //   }
    //   return Promise.reject(error.response);     
    // }
  }
);
// 发送 POST 请求

export default service;
/*
export default 导出，只能默认导出一个，在需要使用的页面 import service from '@/utils/request.js'
*/