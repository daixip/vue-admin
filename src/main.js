import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./styles/normalize.scss"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import VueCookies from 'vue-cookies'
//引入svg
import './icons'

Vue.use(ElementUI);
Vue.use(VueCookies)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
