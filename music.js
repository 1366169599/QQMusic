console.log(3456);
import App from './src/app.vue'
import Vue from 'vue'
// import login from './src/login.vue'
// import regist from './src/signIn.vue'
// import musicRoom from './src/MusicRoom.vue'
import VueRouter from 'vue-router'
// import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// import eleme from './src/eleme.vue'
// import elemeshop from './src/elemeshop.vue'
// Vue.use(ElementUI);/
Vue.use(VueRouter)

const routes = [{
    path: '/login',
    component: () => import('./src/login.vue')
}, {
    path: '/regist',
    component: () => import('./src/signIn.vue')
}, {
    path: '/main',
    component: () => import('./src/MusicRoom.vue')
}, {
    path: '/eleme',
    component: () => import('./src/eleme.vue')
}, {
    path: '/elemeshop',
    component: () => import('./src/elemeshop.vue')
},{
    path: '/singer',
    component: () => import('./src/category/singer.vue')
},{
    path: '/singerMusic',
    component: () => import('./src/category/singerMusic.vue')
},{
    path: '/rankingList',
    component: () => import('./src/category/rankingList.vue')
},{
    path: 'catlist',
    component: () => import('./src/category/catlist.vue')
}]
const router = new VueRouter({
    routes
})
new Vue({
    router,
    el: '#app',
    render: h => h(App)

})