import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastclick from "fastclick"



Vue.config.productionTip = false;
Vue.prototype.$bus = new Vue();

fastclick.attach(document.body)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
