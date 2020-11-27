import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import router from './router'
import App from './App.vue'



Vue.config.productionTip = false

Vue.use(Element)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
