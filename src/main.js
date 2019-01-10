import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible/flexible.js'
import VueRouter from './Router.js'

Vue.config.productionTip = false

new Vue({
  router:VueRouter,
  render: h => h(App),
}).$mount('#app')
