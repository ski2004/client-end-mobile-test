// import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Baseketball from './modula/Baseketball/Index'

import Baseketball from './modula/Baseketball/router'
import cloneDeep from 'lodash/cloneDeep'
// Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    // { name: '籃球', path: '/baseketball/', component: (resovle) => import(`./modula/Baseketball/Index`).then(resovle) , loadChildren: (resovle) => import(`./modula/Baseketball/router`).then(resovle)  },
    { name: '籃球', path: '/baseketball/', component: (resovle) => import(`./modula/Baseketball/Index`).then(resovle) , children: cloneDeep(Baseketball) },
    { name: '大廳', path: '/', component: Home },
    { path: '*', redirect: '/'},
  ],
})

