import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import pos from '@/components/page/pos'
import layOut from '@/components/common/layout'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pos',
      component: pos
    },
    {
        path: '/layout',
        name: 'layout',
        component: layOut
    }
  ]
})
