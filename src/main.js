/*
 * @Author: liyoro
 * @Date: 2023-04-14 16:34:38
 * @LastEditors: liyoro
 * @LastEditTime: 2023-06-27 11:20:36
 * @Description: main.js
 */
import Vue from 'vue'
import 'normalize.css/normalize.css'
import App from './App.vue'
import router from './router'
import store from './store'
import './plugins/element.js'
// import 'element-ui/lib/theme-chalk/index.css'

import '@/assets/iconfont/iconfont.css'

import '@/styles/index.scss'

// import './permission'

import * as filters from './filters' // global filters

// register global utility filters
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

import 'amfe-flexible/index.js'

// Cesium-1.103
// import VueCesium from 'vue-cesium'
import VueCesium from '@/components/vue-cesium'
import lang from '@/components/vue-cesium/lang/zh-hans'
import '@/components/vue-cesium/assets/styles/main.scss'
Vue.use(VueCesium, {
  cesiumPath: './libs/Cesium/Cesium.js',
  // cesiumPath: 'https://cdn.jsdelivr.net/npm/cesium@latest/Build/Cesium/Cesium.js',
  // If you need to use Cesium ion resources, you need to specify it. Go to https://cesium.com/ion/ to apply for an account and get Access Token. If it is not specified, it may cause the loading of CesiumIon's online images and terrain to fail.
  accessToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI5YzY3ZmIzYi01NTA2LTQ1NzEtYmJkMi0xYjMxN2QyYjgxMDAiLCJpZCI6MTQ2OTk3LCJpYXQiOjE2ODcyMjk3NzN9.mKClS7KJhQx4Y-WsFW5NHd0JyCzaURb-N3khTx7Vmgs',
  lang: lang // 2.0.3+ //  zh-hans
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
