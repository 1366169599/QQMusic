import App from './src/app.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
import CommonPlugin from './src/util/common-plugin';

Vue.use(VueRouter)
Vue.use(CommonPlugin)

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