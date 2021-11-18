// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/index.scss'
import axios from 'axios'
import qs from 'qs'

import {resetForm, addDateRange, parseTime, handleTree} from './utils/general'
import {getDicts} from './api/system/dict/data'

// 全局挂载方法
Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.prototype.resetForm = resetForm
Vue.prototype.addDateRange = addDateRange
Vue.prototype.getDicts = getDicts
Vue.prototype.parseTime = parseTime
Vue.prototype.handleTree = handleTree
Vue.use(router)
Vue.use(ElementUI)
Vue.prototype.msgSuccess = function (msg) {
  this.$message({showClose: true, message: msg, type: 'success'})
}

Vue.prototype.msgError = function (msg) {
  this.$message({showClose: true, message: msg, type: 'error'})
}

Vue.prototype.msgInfo = function (msg) {
  this.$message.info(msg)
}
axios.defaults.baseURL = 'http://localhost:8082/' // 后端开发环境地址
// axios.defaults.baseURL = 'http://172.18.31.16:8000/';//后端地址
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8' // 配置请求头信息
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
