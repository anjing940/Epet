## 项目描述
      >此项目为宠物商城APP
      >包括商品，分类列表，购物车，个人中心等多个子模块
      >使用Vue全家桶+ES6+Webpack等前端最新最热的技术
      >采用模块化、组件化、工程化的模式开发
##  技术选型
      >前台数据处理/交互/组件化
        .vue全家桶
        。vue
        。vue-router
        。vuex
        。mint-ui
        。vue-lazyload
        。vue-scroller
        .滑动库
        。better-scroll
        。swiper
        。moment
      
      >前后台交互
        .mock数据
        .测试接口
        .ajax请求
      >模块化
        .ES6
        .bable
      >项目构建/工程化
        .webpack
        .vue-cli
        .eslint
      >CSS预编译器
        .stylus

##  前端路由
      .一级路由
      。首页/msite
      。分类/type
      。购物车/car
      。登录/login 
      。全部品牌/whole
      .二级路由
      。分类列表/class
      。品牌分类/brand
##  API接口
      .前后台交互的API接口
      .API接口
      。url
      。请求方式
      。请求参数
      。响应数据格式
##  第三方插件库
      .npm install stylus stylus-loader --save-dev
      。stylus预编译器
      .npm install vue-router --save
      。用于创建路由器
      。创建路由器的构建函数
      。配置路由
      。注册路由
      .npm install axios --save
      。使用axios/vue-resource与后端进行数据交互
      .npm install vuex --save
      。vuex管理应用组件状态
      .npm install better-scroll --save
      。better-scroll/vue-scroller实现页面滑动效果
      .npm install babel-plugin-component -D//按需引入
      。将 .babelrc 修改为：
     
      {
        "presets": [
          ["es2015", { "modules": false }]
        ],
        "plugins": [["component", [
          {
            "libraryName": "mint-ui",
            "style": true
          }
        ]]]
      }
      。使用mint-ui组件库构建界面
      
      .npm install --save vue-lazyload
      。vue-lazy实现图片惰加载
      
      .npm install mockjs --save
      。mockjs模拟后台数据接口
      .npm install swiper
      。swiper实现轮播效果

##  样式/布局/效果相关
      >使用stylus编写模块化的CSS
      >使用图标字体
      >解决移动端1px边框问题
      // 一像素上边框
      top-border-1px($color)
        position relative
        &::before
          content ''
          position absolute
          z-index 200
          left 0
          top 0
          width 100%
          height 1px
          background-color $color
      
      //根据像素比缩放1px像素边框
      @media only screen and (-webkit-device-pixel-ratio:2 )
        .border-1px
          &::before
            transform scaleY(.5)
      @media only screen and (-webkit-device-pixel-ratio:3 )
        .border-1px
          &::before
            transform scaleY(.333333)
      >flex弹性布局
## day01
### VueE宠商城
#### 1.搭建Vue脚手架
      npm install -g vue-cli   
      vue init webpack gshop_pet  
      cd gshop  
      npm install
      npm run dev
      : localhost:8080
#### 2.引入stylus
      Css预编译器
      npm install stylus stylus-loader --save-dev    
#### 3.搭建路由
      下载路由npm install vue-router --save
      引入路由模块并使用
      在main.js中配置路由
      项目路由拆分实现路由跳转
#### 4.编写首页的静态页面
      1.橡皮筋效果
      npm install better-scroll --save //better scroll
      2.图片轮播效果
      npm install swiper
        <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../common/images/index/369bb47c593f6944600ffd807bad927d.jpg" alt="">
              </div>
              <div class="swiper-slide">
                <img src="../../common/images/index/8487a490b5541a4154f57000db9c3193.jpg" alt="">
              </div>
            </div>
            <div class="swiper-pagination"></div>
        </div>

            mounted(){
              var swiper = new Swiper('.swiper-container', {
                loop: true,//每次展现一张
                
                pagination: {
                  el: '.swiper-pagination',//配置小圆点
                }
              });
            }
        首页第一个轮播图 导航小圆点样式的修改
                       .swiper-pagination-bullet 
                          background: #fff
                          opacity: .9
                          width: 6px
                          height: 6px
                          border-radius 100%
                        .swiper-pagination-bullet-active //当前选中的圆点导航
                          width 16px
                          height 6px
                          border-radius 6px
                这个是轮播的一个配置，自动轮播时，你点了以后就不自动播放了，这个时解决这个问题的配置autoplay: {
                              delay: 2500,
                              disableOnInteraction: false,
                            },   
                            
           slidesPerView:4,//每次展现的个数
           freeMode:true,//橡皮筋效果
           spaceBetween:10//左右间距                   
## day02
#### 完成功能：首页，搭建分类页面，抽取分类详情的组件,购物车静态页面搭建
#### 完成进度：购物车页面的实现，使用雪碧图调整背景的位置
#### 问题及解决方案：
      1.页面整体发生滑动
      设置用户缩放行为为no,并且把每个轮播与橡皮筋的父级设置为overflow：hidden
      2.分类页头部实现有些吃力
      分类与品牌设为左浮动，搜索设为右浮动，分类与品牌之间使用margin-right去调
## day03
#### 完成功能：
      1.登录方式的显示与隐藏，分类页面的数据获取
      2.mock模拟数据下载安装
      npm install mockjs --save
      在main 文件中引入 mockjs
      引入data数据
      配置mock url地址，模板数据
      实现了mock数据
      3.配置完成vuex
      4使用axios发送请求 
#### 完成进度
      分类数据获取      
####  问题及解决方案     
      1.父组件添加子路由，样式失效
      解决方案：
      footer样式里面使用class="{on:$route.path==='/sort'}"中$route.path应该是/sort/tab1或/sort/tab2。 全等判断为false,无法绑定on
       可以通过截串:class="{on:$route.path.slice(0,5) ==='/sort'}" 之后解决；
      2. 点击导航变颜色默认选中第一个
        重置点击事件的index值
        为当前点击的事件添加class样式
        @click="setIndex(index)" :class="{on:index===currentIndex}"
              setIndex(index){
                this.currentIndex = index
              },
## day04
#### 完成功能    
      首页，分类页面获取数据完成,
      将显示全部品牌页设计成一级路由
#### 完成进度      
      实现图片懒加载
      npm install --save vue-lazyload  //懒加载
      图片懒加载：
      在main.js中引入
      import Vuelazyload from 'vue-lazyload'
      import loading from './common/images/index/default-epet.png'
      并配置引入的图片
      Vue.use(Vuelazyload, {
        loading
        // <img v-lazy="food.image">
      })

#### 问题及解决方案
      1点击回退失效
      底部的路由将replace替换为push,push可以添加到缓存中，可以通过
      this.$router.go(-1): 请求(返回)上一个记录路由
      this.$router.go(1): 请求下一个记录路由
      2橡皮筋效果不能实现的问题
       父级的高度固定，子级的高度要大于父级才会出现橡皮筋效果，使用better-Scorll,获取的是第一个子元素，分类列表右测要被包裹三层，最外层使用better-scorll,第二次用于获取第一个子元素，第三次用于获取数据。三层数据嵌套在父级使用v-if,不能放在第一层和第二层父级页面的初始没有数据，不会进入子级，所以会导致子级没有高度，导致获取不到子元素

      3.首页加载完成后立即刷新时会出现轮播区域失效
      在获取数据之后，加一个回调函数，将sweper放到$nextTick函数中，当页面数据完成加载更新后立刻执行，
      并且在action异步请求函数中添加回调并调用

      4.分类页中，使用v-for遍历嵌套的层级达到三层时报错，不影响效果
       解决办法，在遍历的父元素中加上v-if判定，不报错
## day05
 #### 完成功能    
       实现全部品牌的静态与交互，点击切换展现品牌列表的效果
       完成首页导航点击的新页面
       登录实现简单的前端验证
       登录页提示信息使用mint-ui的小组件MessageBox
       
 #### 完成进度      
       1.全部品牌实现完成
       2.登录页面的验证
###### 引入 Mint UI
        一：完整引入
        在 main.js 中写入以下内容：
        import Vue from 'vue'
        import MintUI from 'mint-ui'
        import 'mint-ui/lib/style.css'
        import App from './App.vue'
        
        Vue.use(MintUI)
        
        new Vue({
          el: '#app',
          components: { App }
        })
     
        二：按需引入
        借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。        
        首先，安装 babel-plugin-component：
        npm install babel-plugin-component -D
        然后，将 .babelrc 修改为：
        {
          "presets": [
            ["es2015", { "modules": false }]
          ],
          "plugins": [["component", [
            {
              "libraryName": "mint-ui",
              "style": true
            }
          ]]]
        }
        如果你只希望引入部分组件，比如 Button 和 Cell，那么需要在 main.js 中写入以下内容：
        
        import Vue from 'vue'
        import { Button, Cell } from 'mint-ui'
        import App from './App.vue'
        
        Vue.component(Button.name, Button)
        Vue.component(Cell.name, Cell)
        /* 或写为
         * Vue.use(Button)
         * Vue.use(Cell)
         */
        
        new Vue({
          el: '#app',
          components: { App }
        })
        
        必须要有返回值：
         if(!name){
              MessageBox.alert("请输入用户名","提示")
              return
            }else if(!pwd){
              MessageBox.alert("请输入密码","提示")
              return
            }else{
              MessageBox.alert("登录成功","提示")
            }
 #### 问题及解决方案            
       一.实现全部品牌思路不清晰
       实现思路
       1.左侧的滑动
       1).为左侧的分类品牌绑定橡皮筋效果，设置父级高度小于子级高度
       2).监视左侧的滑动过程和滑动的结束，并保存他们的值（滑动中的值与结束位置的值）
       2.左侧的高度计算
       1).初始化tops[]为一个空数组，top初始化高度为0
       2).通过父级Ul获取所有子级li，这时为一个伪数组，将它转化为真数组，并且遍历得到每个li
       计算每个li的高度，添加到tops[]数组中
       3.得到当前的index值
       1).通过tops.findIndex((top, index) => scrollY>=top && scrollY<tops[index+1])
       返回一个index值，Scrolly的高度要大于当前top的高度并且小于下一个top的高度
       2).为右侧的分类绑定一个点击事件，通过index值来控制左侧滑动的位置，滑动的距离=tops[index]
       =scrollY
       二.数据缓存问题
       操作的数据在点击其他页面返回后还能保留在缓存中，在APP页面添加<keep-alive>
       三.首页加载loading
       引入mint-ui中的Indicator
       在获取数据的异步请求成功后将其关闭 Indicator.close
       Indicator.open({
               text: '加载中...',
               spinnerType: 'fading-circle'
             });
       
       
               
                
                
             
                
                
