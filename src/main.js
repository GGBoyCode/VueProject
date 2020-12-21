import Vue from 'vue'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import router from './router'
import store from './store'
import App from './App.vue'
//引入富文本编辑器
import VueQuillEditor  from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'


Vue.config.productionTip = false

Vue.use(Element)
Vue.use(VueQuillEditor )
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
