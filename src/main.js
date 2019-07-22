
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const isDebug_mode = process.env.NODE_ENV !== 'production';

Vue.config.debug = isDebug_mode;
Vue.config.devtools = isDebug_mode;
// import 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import './components'
// filter
import './filter'
// // Plugins 套件引入
import './plugins'
// 語系
import translate from './helpers/i18n/index.js'
Vue.prototype.$translate = translate
// console.log(translate)

Vue.config.productionTip = false
router.beforeEach((to, from, next) => {
  // console.log(to,from,next)
  next();

});
console.log(router)

import { mapState } from 'vuex'
new Vue({
  router: router,
  store,
  computed: {
    //相依的資料改變時才做計算方法
    ...mapState([
      'isLoading',
      'version'
    ]),
  },
  render: h => h(App)
}).$mount('#app')
