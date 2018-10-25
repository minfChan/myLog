// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAxios from 'vue-axios'
//Style
import './assets/style.css'

//element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { locale });

//Loading
import Loading from './components/loading'
Vue.use(Loading)

//Strings
import Strings from '@/helper/String'
Vue.prototype.Strings = Strings

//axios
import axios from 'axios'
Vue.prototype.$http = axios
Vue.use(VueAxios, axios)

//api
import api from  '../config/api.js'
Vue.prototype.api = api

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
