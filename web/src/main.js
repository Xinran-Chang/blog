import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
import './style.scss'
import router from './router'
import './assets/iconfont/iconfont.css'

import Card from './components/Card.vue'
Vue.component('m-card',Card)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
