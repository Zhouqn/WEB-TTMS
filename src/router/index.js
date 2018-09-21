import Vue from 'vue'
import Router from 'vue-router'
import Account from '@/components/Account'
import HelloWorld from '@/components/HelloWorld'
import Play from '@/components/Play'
import Schedule from '@/components/Schedule'
import Studio from '@/components/Studio'

Vue.use(Router)

export default new Router({
  routes: [
      {
          path: '/account',
          name: 'Account',
          component: Account
      },
      {
          path: '/',
          name: 'HelloWorld',
          component: HelloWorld
      },
      {
          path: '/play',
          name: 'Play',
          component: Play
      },
      {
          path: '/schedule',
          name: 'Schedule',
          component: Schedule
      },
      {
          path: '/studio',
          name: 'Studio',
          component: Studio
      }
  ]
})
