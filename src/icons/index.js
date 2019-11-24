import Vue from 'vue'
import svgIcon from './svgIcon.vue'
//自定义全局组件
Vue.component('svg-icon',svgIcon)
//解析svg文件

const req = require.context('./svg', false, /\.svg$/) //读取指定目录下面的所有文件，第一个是目录，第二个是否遍历子级目录，定义遍历文件规则
const requireAll = requireContext => requireContext.keys().map(requireContext)
requireAll(req)