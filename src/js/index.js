import Vue from 'vue'
import VueRouter from 'vue-router'
import Map from './components/map.vue'
import Dashboard from './components/dashboard.vue'

Vue.use(VueRouter)

const routes = [
    { path: '/dashboard', component: Dashboard },
    { path: '/map', component: Map }
]

const router = new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')
