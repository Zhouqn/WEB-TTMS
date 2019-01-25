import Vue from 'vue'
import Router from 'vue-router'
import Account from '@/components/account/Account'
import HelloWorld from '@/components/HelloWorld'
import Play from '@/components/play/Play'
import Schedule from '@/components/schedule/Schedule'
import Studio from '@/components/studio/Studio'
import Sale from '@/components/sale/Sale'

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
      component: Studio,
    },
    {
      path: '/sale',
      name: 'Sale',
      component: Sale,
    }
  ]
})
