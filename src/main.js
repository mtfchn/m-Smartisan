// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Header from './components/Header'
import Footer from './components/Footer'
import VueSession from 'vue-session'
import store from './vuex/index'



import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css'

Vue.component(Header.name,Header)
Vue.component(Footer.name,Footer)



Vue.use(VueSession)
Vue.use(MintUI);


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
