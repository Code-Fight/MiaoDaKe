import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
<<<<<<< Updated upstream
import VueRouter from 'vue-router';
import 'element-ui/lib/theme-default/index.css'
import App from './App.vue'
=======
import App from './App.vue'
//import Menu from './assets/componets/menu.vue'
import Index from './assets/componets/Index.vue'
import 'element-ui/lib/theme-default/index.css'
>>>>>>> Stashed changes
import './assets/stylesheets/application-a07755f5.css'
import './assets/font-awesome/css/font-awesome.min.css'
import Index from './assets/pages/index.vue';

Vue.use(ElementUI)
<<<<<<< Updated upstream
Vue.use(VueRouter);
const routes = [
    { path: '/', component: App,
        children: [

            { path: 'index', name:'index', component: Index },

            { path: 'page1', name:'page1', component: Index },

            { path: 'page2/:id', name:'page2', component: Index }
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
=======
//Vue.use(VueRouter)

>>>>>>> Stashed changes




// new Vue({
//   el:"#app_c",
//   render:h=>h(Index)
// })



const router = new VueRouter({
  
  routes: [
    { path: '/', name: 'home', component: Index }
  ]
})

// new Vue({
//     render: h => h(App)
// }).$mount('#app_c');
// new Vue({
//     router:router,
//   el: '#app_c'
// })
const app = new Vue({ router:router }).$mount('#wrapper');  