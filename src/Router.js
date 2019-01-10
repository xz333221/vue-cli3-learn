import Vue from 'vue'
import App from './App'
import Home from './Home'
import Route1 from './components/test_route/Route1'

import VueRouter from 'vue-router'
Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes:[
    {
      path:'/',
      component:Home
    },
    {
      path:'/home',
      component:Home,
      children:[
        {
          path:'/home/route1',
          component:Route1
        },
      ]
    },

  ]
})