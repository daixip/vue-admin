import axios from 'axios'
//创建拦截器
const   BASEURL= process.env.NODE_ENV === 'production' ? '' : '/devApi'
const service = axios.create({
    baseURL: BASEURL,
    timeout: 1000,
});
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});
// 发送 POST 请求

export default service;
/*
export default 导出，只能默认导出一个，在需要使用的页面 import service from '@/utils/request.js'
*/