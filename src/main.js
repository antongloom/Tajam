// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuescroll from 'vue-scroll'

Vue.config.productionTip = false

Vue.use(Vuelidate,VueAxios, axios, vuescroll);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  axios,
  VueAxios,
  vuescroll,
  components: { App },
  template: '<App/>'
})
