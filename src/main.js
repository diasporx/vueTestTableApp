import Vue from 'vue'
import App from './App'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})



