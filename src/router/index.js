import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../views/home/home')
const category = () => import('../views/category/category')
const cart = () => import('../views/cart/cart')
const profile = () => import('../views/profile/profile')
const detail = () => import('../views/detail/detail')

Vue.use(Router)

export default new Router({
    routes: [{
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: home
        },
        {
            path: '/category',
            component: category
        },
        {
            path: '/cart',
            component: cart
        },
        {
            path: '/profile',
            component: profile
        },
        {
            path:'/detail',
            component:detail
        }
    ],
    mode: 'history'
})

const originalPush = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
    return originalPush.call(this, location).catch(err => err)
} //解决双击报错的问题!!!!!

