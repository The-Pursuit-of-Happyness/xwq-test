import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Counter from '@/components/Counter'
import Game from '@/components/Game'
import Slider from '@/components/Slider'
import Login from '@/pages/Login'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Counter',
      name: 'Counter',
      component: Counter
    },
    {
      path: '/Game',
      name: 'Game',
      component: Game
    },
    {
      path: '/Slider',
      name: 'Slider',
      component: Slider
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
  ]
})