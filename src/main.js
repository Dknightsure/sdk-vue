// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

import App from './App'
import AddApp from './components/AddApp'
import SDKDownload from './components/SDKDownload'
import Ad from './components/Ad'
import Income from './components/Income'
import Info from './components/Info'
import AppList from './components/AppList'

import Element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

Vue.use(Element);

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  { path: '/', component: Income },
  { path: '/SDKDownload', component: SDKDownload },
  { path: '/AddApp', component: AddApp },
  { path: '/Ad', component: Ad },
  { path: '/Income', component: Income },
  { path: '/Info', component: Info },
  { path: '/AppList', component: AppList }
]

// 3. 创建 router 实例，然后传 `routes` 配置
const router = new VueRouter({
  routes, // （缩写）相当于 routes: routes
})

/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   render: h => h(App)
// })

const app = new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
