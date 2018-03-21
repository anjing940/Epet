import Vue from 'vue'
import App from './App'
import router from './router'
import './mock/MockServer' // 后面就可以访问内部定义好的接口
import store from './store'
import Vuelazyload from 'vue-lazyload'//图片懒加载
import loading from './common/images/index/default-epet.png'//引入懒加载的图
import { MessageBox } from 'mint-ui'//引入mint-ui
import VDistpicker from 'v-distpicker'//地址选择器


Vue.use(Vuelazyload, {
  loading
  // <img v-lazy="food.image">
})

Vue.component('v-distpicker', VDistpicker);//注册成全局组件

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
