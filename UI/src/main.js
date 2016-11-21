import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import Menu from './assets/componets/menu.vue'
import './assets/stylesheets/application-a07755f5.css'
import './assets/font-awesome/css/font-awesome.min.css'


Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(Menu)
})


