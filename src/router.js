import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const ShoppingMall = () => import('@/views/ShoppingMall')
const Register = () => import('@/views/Register')
const Login = () => import('@/views/Login')
const Goods = () => import('@/views/Goods')
const CategoryList = () => import('@/views/CategoryList')
const Cart = () => import('@/views/Cart')
const Mine = () => import('@/views/Member')
const Main = () => import('@/components/Main')

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path:'',
      redirect:'/ShoppingMall'
    },
    {
      path:'/main',
      name:'Main',
      component:Main,
      children:[
        {
          path: '/ShoppingMall',
          name: 'ShoppingMall',
          component: ShoppingMall
        },
        {
          path: '/CategoryList',
          name: 'CategoryList',
          component: CategoryList
        },
        {
          path: '/Cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: '/Mine',
          name: 'Mine',
          component: Mine
        },
      ]
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/goods',
      name: 'Goods',
      component: Goods
    },
  ]
})
