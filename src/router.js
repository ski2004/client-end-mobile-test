// import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
// import Baseketball from './modula/Baseketball/Index'

import Baseketball from './modula/Baseketball/router'
import cloneDeep from 'lodash/cloneDeep'
// Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[
    // { name: '籃球', path: '/baseketball/', component: (resovle) => import(`./modula/Baseketball/Index`).then(resovle) , loadChildren: (resovle) => import(`./modula/Baseketball/router`).then(resovle)  },
    { name: '體彩', path: '/game/sports/', component: (resovle) => import(`./modula/Baseketball/Index`).then(resovle) , children: cloneDeep(Baseketball) },
    { name: 'Super 彩球', path: '/game/lottery/', component: (resovle) => import(`./modula/Baseketball/Index`).then(resovle) , children: cloneDeep(Baseketball) },
    { name: '皇家視訊', path: '/game/royal/', component: (resovle) => import(`./modula/Baseketball/Index`).then(resovle) , children: cloneDeep(Baseketball) },
    { name: 'BingoBingo', path: '/game/bingo/', component: (resovle) => import(`./modula/Baseketball/Index`).then(resovle) , children: cloneDeep(Baseketball) },
    
    { name: '會員資料', path: '/member/profile/', component: (resovle) => import(`./modula/Baseketball/Index`).then(resovle) , children: cloneDeep(Baseketball) },
    { name: '密碼修改', path: '/member/resetPwd/', component: (resovle) => import(`./modula/Baseketball/Index`).then(resovle) , children: cloneDeep(Baseketball) },
    { name: '明細', path: '/history/', component: (resovle) => import(`./modula/Baseketball/Index`).then(resovle) , children: cloneDeep(Baseketball) },
    { name: '公告', path: '/member/notification/', component: (resovle) => import(`./modula/Baseketball/Index`).then(resovle) , children: cloneDeep(Baseketball) },
    { name: '比賽結果', path: '/other/result/', component: (resovle) => import(`./modula/Baseketball/Index`).then(resovle) , children: cloneDeep(Baseketball) },
    { name: '條款與規則', path: '/other/rule/', component: (resovle) => import(`./modula/Baseketball/Index`).then(resovle) , children: cloneDeep(Baseketball) },

    { name: '盤口對照表', path: '/other/oddsComp/', component: (resovle) => import(`./modula/Baseketball/Index`).then(resovle) , children: cloneDeep(Baseketball) },
    { name: '過關計算器', path: '/other/clearanceCalc/', component: (resovle) => import(`./modula/Baseketball/Index`).then(resovle) , children: cloneDeep(Baseketball) },
    { name: '賠率格式', path: '/other/oddsFormat/', component: (resovle) => import(`./modula/Baseketball/Index`).then(resovle) , children: cloneDeep(Baseketball) },
    { name: '大廳', path: '/', component: Home },
    { name: '登入', path: '/login', component: Login },
    { path: '*', redirect: '/'},
  ],
})

