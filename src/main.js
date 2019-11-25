import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./styles/normalize.scss"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
//引入路由守卫
import './router/permit'
//引入svg
import './icons'
Vue.use(ElementUI);
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
