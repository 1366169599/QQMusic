import App from './src/app.vue'
import Vue from 'vue'
import VueRouter from 'vue-router'
import 'element-ui/lib/theme-chalk/index.css';
import CommonPlugin from './src/util/common-plugin';
import store from './store.js';
import mixin from './mixin.js';

Vue.use(VueRouter)
Vue.use(CommonPlugin)
Vue.mixin(mixin)

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
    path: '/topList',
    component: () => import('./src/category/topList.vue')
},{
    path: '/catlist',
    component: () => import('./src/category/catlist.vue')
},{
    path: '/songList',
    component: () => import('./src/category/songList.vue')
},{
    path: '/djRadios',
    component: () => import('./src/category/djRadios.vue')
},{
    path: '/albumCont',
    component: () => import('./src/singerMusic/albumCont.vue')
},{
    path: '/search',
    component: () => import('./src/musicRoom/search.vue')
},{
    path: '/songListCont',
    component: () => import('./src/category/songListCont.vue')
},{
    path: '/detail',
    component: () => import('./src/detail.vue')
},{
    path: '/popCollect',
    component: () => import('./src/popCollect.vue')
}, {
    path: '/rankingList',
    component: () => import('./src/category/rankingList.vue')
}, {
    path: '/comment',
    component: () => import('./src/detail/song-comment.vue')
}]
const router = new VueRouter({
    routes
})
new Vue({
    router,
    store,
    el: '#app',
    render: h => h(App)

})

