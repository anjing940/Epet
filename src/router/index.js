import Vue from 'vue'
import VueRouter  from "vue-router"
import Msite from "../pages/Msite/Msite.vue"
import Type from "../pages/Type/Type.vue"
import Cart from "../pages/Cart/Cart.vue"
import Login from "../pages/Login/Login.vue"
import Class from "../pages/Type/Class/Class.vue"
import Brand from "../pages/Type/Brand/Brand.vue"
import Whole from "../pages/Whole/Whole.vue"
import Address from "../pages/Address/Address.vue"
Vue.use(VueRouter)

export default new VueRouter({
  routes:[
    {
      path:'/msite',
      component:Msite,
      meta: {
        showFooter: true // 需要显示底部组件
      }
    },
    {
      path:'/type',
      component:Type,
      meta: {
        showFooter: true // 需要显示底部组件
      },
      children:[
        {
          path: '/type/class',
          component: Class,
          meta: {
            showFooter: true // 需要显示底部组件
          },
        },
        {
          path: '/type/brand',
          component: Brand,
          meta: {
            showFooter: true // 需要显示底部组件
          }
        },
        {
          path: '',
          redirect: '/type/class'
        },
      ],
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/whole',
      component:Whole
    },
    {
      path:'/address',
      component:Address
    },
    {
      path: '/',
      redirect: '/msite'
    }
  ]
})



