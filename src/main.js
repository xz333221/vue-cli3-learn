import Vue from 'vue'

import App from './App.vue'

import 'lib-flexible/flexible.js'

import VueRouter from './Router.js'

const Bus = new Vue()

import $ from 'jquery'

Vue.config.productionTip = false

new Vue({
  data(){
    return{Bus}
  },
  router:VueRouter,
  render: h => h(App),
}).$mount('#app')
