
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import axios from 'axios'
Vue.prototype.$http = axios;
// config setting
const isDebug_mode = process.env.NODE_ENV !== 'production';
Vue.config.debug = isDebug_mode;
Vue.config.devtools = isDebug_mode;
Vue.config.productionTip = false


// middleware
import middleware from '@/helpers/middleware'
// Components
import './components'
// filter
import './filter'
// // Plugins 套件引入
import './plugins'
import minins from './plugins/i18n/minins'
Vue.mixin(minins)


router.beforeEach((to, from, next) => {
  middleware.validate(to, from, next);
});

// import { mapActions } from 'vuex'
new Vue({
  router: router,
  store,
  render: h => h(App)
}).$mount('#app')
