import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home'
import Detail from '@/components/Detail'
import Category from '@/components/Category'


import Cart from '@/components/Cart'
import Center from '@/components/Center'
import My from '@/components/My'

import Login from '@/components/Login'
import Regist from '@/components/Regist'
import Myhome from '@/components/Myhome'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
      	{
          path: '/',
          name: 'Center',
          component: Center
        },
        {
          path: '/category',
          name: 'Category',
          component: Category
        },
        {
          path: '/cart',
          name: 'Cart',
          component: Cart
        },
        {
          path: '/my',
          name: 'My',
          component: My,
          children:[
          	{
		          path: '/',
		          name: 'Myhome',
		          component: Myhome
		        },
          	{
		          path: 'login',
		          name: 'Login',
		          component: Login
		        },
		        {
		          path: 'regist',
		          name: 'Regist',
		          component: Regist
		        },
          ]
        },
       ]
    },
    {
      path: '/detail/:productid',
      name: 'Detail',
      component: Detail,
    },
//  {
//    path: '/category',
//    name: 'Category',
//    component: Category
//  }
  ]
})
