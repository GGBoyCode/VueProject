import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home');
const Profile = () => import('../views/profile/Profile');
const AccountSetting = () => import('../views/profile/page/AccountSetting');
const Collection = () => import('../views/profile/page/Collection');
const Connect = () => import('../views/profile/page/Connect');
const Message = () => import('../views/profile/page/Message');
const Forum = () => import('../views/forum/Forum');
const Detail = () => import('../views/forum/Detail');
const Interview = () => import('../views/forum/Interview');
const Mall = () => import('../views/mall/mall')
const MallDetail = () => import('../views/mall/detail')
const Cart = () => import('../views/mall/cart')

const routes = [
    //如果为'/home'则重定向为根目录'/'
  {
    path: '/home',
    redirect:'/'
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    children: [
      {
        path:'',
        redirect:'account'
      },
      {
        path: 'account',
        name: 'account',
        component: AccountSetting
      },
      {
        path: 'collection',
        name: 'collection',
        component: Collection
      },
      {
        path: 'connect',
        name: 'connect',
        component: Connect
      },
      {
        path: 'message',
        name: 'message',
        component: Message
      }
    ]
  },
  {
    path: '/forum',
    name: 'forum',
    component: Forum,
    children: [
      {
        path: '',
        component: Interview
      },
      {
        path: 'detail',
        name: 'detail',
        component:Detail
      }
    ]
  },
  {
    path: '/mall',
    name: 'mall',
    component: Mall,
  },
  {
    path: '/mall/detail',
    name: 'mallDetail',
    component:MallDetail
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
