// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
import Element from 'element-ui'
import storeBase from './store'

import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element)
Vue.use(Vuex)

const store = new Vuex.Store(storeBase)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
