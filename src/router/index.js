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
    children:[
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
    component: Forum
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
