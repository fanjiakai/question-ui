// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'
import '@/assets/styles/main.css'
import '@/assets/js/main.js'
import echarts from 'echarts'
import 'echarts-gl'
import axios from 'axios'
import VueAxios from 'vue-axios'
import 'leaflet/dist/leaflet.css';
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(ElementUI);
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
