import Vue from 'vue'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
import './assets/stylesheets/application-a07755f5.css'
import './assets/font-awesome/css/font-awesome.min.css'
import Index from './assets/pages/index.vue'
import Could from './assets/pages/could.vue'
import Transfer from './assets/pages/transfer.vue'
import Monitor from './assets/pages/monitor.vue'
import Send from './assets/pages/send.vue'
Vue.use(ElementUI)
Vue.use(VueRouter);
const routes = [
    { path: '/', component: App,
        children: [

            { path: 'index', name:'index', component: Index },

            { path: 'could', name:'could', component: Could },

            { path: 'transfer', name:'transfer', component: Transfer },
            { path: 'monitor', name:'monitor', component: Monitor },
            { path: 'send', name:'send', component: Send }
            
        ]
    }
];

const router = new VueRouter({
    routes:routes, // short for routes: routes
    linkActiveClass:'active'     //router-link的选中状态的class，也有一个默认的值

});
const app = new Vue({
    router
}).$mount('#app');




