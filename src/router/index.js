import Vue from 'vue'
import Router from 'vue-router'
import ServerNew from '@/components/views/ServerNew'
import ServerInfo from '@/components/views/ServerInfo'
import ServerDelete from '@/components/views/ServerDelete'
import ServersStatus from '@/components/views/ServersStatus'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ServerInfo',
      component: ServerInfo
    },
    {
      path: '/newserver',
      name: 'ServerNew',
      component: ServerNew
    },
    {
      path: '/deleteserver',
      name: 'ServerDelete',
      component: ServerDelete
    },
    {
      path: '/status',
      name: 'ServersStatus',
      component: ServersStatus
    }
  ]
})
