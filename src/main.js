import Vue from 'vue'
import App from './App'
import VueLazyload from 'vue-lazyload'
import 'vant/lib/index.css'
import router from './router'
import 'babel-polyfill'
import  fastclick from 'fastclick'
Vue.config.productionTip = false
Vue.use(VueLazyload,{
  preLoad:1.3,
  error:require("common/img/lazyLoad/error.png"),
  loading:require("common/img/lazyLoad/loading.png"),
  attempt:2
})
fastclick.attach(document.body)
import  'common/stylus/index.styl'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
