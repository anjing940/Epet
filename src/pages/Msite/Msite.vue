<template>
  <div class="Msite">
    <!--头部导航-->
    <div class="Msite_header">
      <div class="Msite_header_top">
        <span class="Msite_header_top_left">
          <router-link to="/address" tag="span">狗狗 | 重庆</router-link>
            <i class="iconfont icon-sanjiao"></i>
        </span>
        <span class="Msite_header_input">
          <input type="text" placeholder="搜索商品和品牌">
          <i class="iconfont icon-sousuo"></i>
        </span>
        <span class="Msite_header_top_right">
          <i class="iconfont icon-xinxi"></i>
        </span>
      </div>
      <div class="Msite_header_button" ref="shopBox">
        <ul>
          <li v-for="(item,index) in home.menus":key="index" @click="setIndex(index)"
              :class="{on:index===currentIndex}">{{item.menu_name}}</li>
        </ul>
      </div>
    </div>
    <!--轮播效果-->
    <div class="swiper-container swiper-one">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(img,index) in home.dog_banner" :key="index">
          <img :src="img"  alt="">
        </div>
      </div>
      <div class="swiper-pagination">
      </div>
    </div>
    <!--狗狗眨眼睛-->
    <div class="go_dog"></div>
    <!--315我们在行动-->
    <div class="Msite_Nav">
      <img :src="home.dog_img" alt="">
    </div>
    <!--E宠分类-->
    <div class="Msite_types">
      <ul>
        <li v-for="(list,index) in home.menu_list"><img :src="list" alt=""></li>
      </ul>
    </div>
    <!--一折秒杀-->
    <div class="Msite_discount">
      <div class="Msite_dis_Seckill">
        <img :src="home.miaosha" alt="">
      </div>
      <div class="Msite_dis_content">
        <span class="Msite_dis_content_day">
          <span class="Msite_dis_con_day_left">
            <img src="../../common/images/index/new_index_icon_suprice.png" alt="">
          </span>
          <span class="Msite_dis_content_day_right">本场结束12:00</span>
        </span>
        <div class="Msite_dis_content_content">
            <div class="swiper-two">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="Msite_dis_content_item">
                    <div class="Msite_dis_content_item_img">
                      <img src="../../common/images/index/2a13da7043d568175753177ca978dae7.jpg" alt="">
                    </div>
                    <div class="Msite_dis_content_item_cont">
                      <p class="Msite_dis_content_item_text">￥4.8</p>
                      <p class="Msite_dis_content_item_text">省43.80</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="Msite_dis_content_item">
                    <div class="Msite_dis_content_item_img">
                      <img src="../../common/images/index/2cdec1bd58b2216764993c30c4fd0ec1.jpg" alt="">
                    </div>
                    <div class="Msite_dis_content_item_cont">
                      <p class="Msite_dis_content_item_text">￥4.8</p>
                      <p class="Msite_dis_content_item_text">省43.80</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="Msite_dis_content_item">
                    <div class="Msite_dis_content_item_img">
                      <img src="../../common/images/index/6d615faef8b6a01e891d8a3012fbb3e6.jpg" alt="">
                    </div>
                    <div class="Msite_dis_content_item_cont">
                      <p class="Msite_dis_content_item_text">￥4.8</p>
                      <p class="Msite_dis_content_item_text">省43.80</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="Msite_dis_content_item">
                    <div class="Msite_dis_content_item_img">
                      <img src="../../common/images/index/8a143773496de6f3afd02634e83ed71f.jpg" alt="">
                    </div>
                    <div class="Msite_dis_content_item_cont">
                      <p class="Msite_dis_content_item_text">￥4.8</p>
                      <p class="Msite_dis_content_item_text">省43.80</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="Msite_dis_content_item">
                    <div class="Msite_dis_content_item_img">
                      <img src="../../common/images/index/68d45608ddbec32608cddec587c342e1.jpg" alt="">
                    </div>
                    <div class="Msite_dis_content_item_cont">
                      <p class="Msite_dis_content_item_text">￥4.8</p>
                      <p class="Msite_dis_content_item_text">省43.80</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="Msite_dis_content_item">
                    <div class="Msite_dis_content_item_img">
                      <img src="../../common/images/index/9876aff7e2c82b7e07fc0d2b5f47c576.jpg" alt="">
                    </div>
                    <div class="Msite_dis_content_item_cont">
                      <p class="Msite_dis_content_item_text">￥4.8</p>
                      <p class="Msite_dis_content_item_text">省43.80</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="Msite_dis_content_item">
                    <div class="Msite_dis_content_item_img">
                      <img src="../../common/images/index/bd6849693ff38f7a86facd53475388f3.jpg" alt="">
                    </div>
                    <div class="Msite_dis_content_item_cont">
                      <p class="Msite_dis_content_item_text">￥4.8</p>
                      <p class="Msite_dis_content_item_text">省43.80</p>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="Msite_dis_content_item">
                    <div class="Msite_dis_content_item_img">
                      <img src="../../common/images/index/e9d557ad275060a67574834a21aecf15.jpg" alt="">
                    </div>
                    <div class="Msite_dis_content_item_cont">
                      <p class="Msite_dis_content_item_text">￥4.8</p>
                      <p class="Msite_dis_content_item_text">省43.80</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--品牌力量-->
    <div class="Msite_discount">
      <div class="Msite_dis_Seckill">
        <img :src="home.brand_power" alt="">
      </div>
      <div class="Msite_dis_content">
        <img :src="home.gif" alt="">
      </div>
    </div>
    <!--一折团-->
    <div class="Msite_group">
      <div class="Msite_group_Seckill">
        <img :src="home.dapaituan"alt="">
      </div>
      <div class="Msite_group_content">
        <div class="swiper-three">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(tuanList,index) in home.dapaituan_list">
              <img :src="tuanList" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--VIP尊享服务-->
    <div class="Msite_brand">
      <div class="Msite_brand_Seckill">
        <img :src="home.vip" alt="">
      </div>
      <ul>
        <li v-for="(itemVip,index) in home.vip_services" :key="index"><img :src="itemVip" alt="">
        </li>
      </ul>
    </div>
    <!--大牌好货-->
    <div class="Msite_Major">
      <div class="Msite_Major_good">
        <img :src="home.haohuo" alt="">
      </div>
      <ul>
        <li v-for="(huo,index) in home.haohuo_list" :key="index">
          <div class="Msite_left">
            <ul>
              <li v-for="(huoLeft,index) in huo.left" :key="index">
                <img v-lazy="huoLeft" alt=""></li>
            </ul>
          </div>
          <div class="Msite_right">
            <ul>
              <li v-for="(huoRight,index) in huo.right" :key="index">
                <img v-lazy="huoRight" alt=""></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    <!--特别星球-->
    <div class="Msite_Especially">
      <div class="Msite_Especially_star">
        <img :src="home.special" alt="">
      </div>
      <div class="Msite_Especially_sale">
        <div class="Msite_Especially_sale_left" >
          <img :src="home.special_left" alt="" >
        </div>
        <ul class="Msite_Especially_sale_right">
          <li class="Msite_Especially_sale_right_one" v-for="(specialItem,index) in home.special_list" :key="index">
            <img :src="specialItem" alt="">
          </li>
        </ul>
      </div>
    </div>
    <!--底部-->
    <div class="Msite_footer">
      <ul>
        <li class="on">触屏版</li>
        <li>手机客户端</li>
        <li>关于我们</li>
        <li>联系我们</li>
      </ul>
      <p class="Msite_footer_text">© wap.epet.com 版权：重庆易宠科技有限公司</p>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll'
import Swiper from "swiper"
import "swiper/dist/css/swiper.min.css"
import {mapState} from "vuex"
import { Indicator } from 'mint-ui';
  export default {
  data(){
    return{
      currentIndex:0,
    }
  },
    created () {
      this.$nextTick(() => {
        this._initScroll();
      });
    },
    mounted(){
      this.$store.dispatch("getHome",()=>{
        this.$nextTick(()=>{
          var swiper = new Swiper('.swiper-one', {
            autoplay:{
              delay: 2500,
              disableOnInteraction: false,
            },
            loop: true,
            pagination: {
              el: '.swiper-pagination',
            }
          });
          var nav = new Swiper('.swiper-two',{
            slidesPerView:4,//每次展现的个数
            freeMode:true,//橡皮筋效果
            spaceBetween:10//左右间距
          });
          var group = new Swiper('.swiper-three', {
            loop: true,
            autoplay:true
          });
        })
        Indicator.close();
      });
      Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
      });
    },
    methods:{
      _initScroll () {
        this.shopBoxScroll = new BScroll(this.$refs.shopBox, {
          // better-scroll 会将点击事件去掉，要在这里开启，同时点击在PC 会被执行两次，要在这里控制
          click: true,
          scrollX: true,
        });
      },
      setIndex(inedx){
        this.currentIndex =inedx
      },
    },
    computed:{
      ...mapState(['home']),
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .Msite
    width 100%
    height 6020px
    .Msite_header
      position fixed
      left 0
      right 0
      top: 0
      width 100%
      height 86px
      z-index 200
      background-color #fff
      .Msite_header_top
        margin 0 auto
        width 95%
        height 50px
        .Msite_header_top_left
          float left
          line-height 50px
          color #666
          font-size 14px
        .Msite_header_input
          line-height 50px
          font-size 14px
          color #666
          input[type='text']
            box-sizing: border-box;
            width 67%
            height 23px
            background-color #e9e9e9
            border-radius 3px
            color #666
            font-size 13px
            padding-left 10px
            outline none
          .iconfont
            margin-left -25px
            font-size 12px
        .Msite_header_top_right
          float right
          line-height 50px
          color #666
          .iconfont
            font-size 20px
      .Msite_header_button
        width 100%
        height 36px
        ul
          overflow hidden
          width 560px
          height 36px
          text-align center
          color: #666;
          font-size 14px
          li
            height 34px
            width 80px
            line-height 34px
            float left
            &.on
              color: #38a71e
              font-weight bold
              border-bottom 2px solid #38a71e
    .swiper-container
      overflow hidden
      width 100%
      margin-top 86px
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
      .swiper-wrapper
        .swiper-slide
          width 100%
          height 160px
          img
            width 100%
            height 160px
    .go_dog
      background: url(../../common/images/index/godog.png) no-repeat;
      width: 41px;
      height: 46px;
      background-size: 80px auto;
      position: fixed;
      bottom: 15%;
      right: 0;
      z-index: 2;
      animation: go_dog 1s steps(1,end) infinite
      @keyframes go_dog
        0%
          background-position 0 0
        50%
          background-position: -41px 0
        100%
          background-position: 0 0
    .Msite_Nav
      width 100%
      height 270px
      img
        width 100%
        height 100%
    .Msite_types
      width 100%
      height 190px
      >ul
        width 100%
        height 190px
        display flex
        flex-wrap wrap
        >li
          width 20%
          height 95px
          img
            width 100%
            height 95px
    .Msite_discount
      width 100%
      height 268px
      .Msite_dis_Seckill
        width 100%
        height 98px
        img
          width 100%
          height 100%
      .Msite_dis_content
        width 100%
        height 170px
        img
          width 100%
          height 100%
        .Msite_dis_content_day
          display block
          width 100%
          height 40px
          .Msite_dis_con_day_left
            line-height 40px
            float left
          .Msite_dis_content_day_right
            float right
            line-height 40px
            font-size 14px
        .Msite_dis_content_content
          overflow hidden
          width 100%
          height 130px
          .swiper-slide
            width 100%
            height 130px
            display flex
            .Msite_dis_content_item
              text-align center
              width 84px
              height 130px
              flex 1
              .Msite_dis_content_item_img
                width 84px
                height 84px
                img
                  width 100%
                  height 100%
              .Msite_dis_content_item_cont
                margin-top 5px
                font-size 13px
                .Msite_dis_content_item_text:nth-child(1)
                  color #f47171
                .Msite_dis_content_item_text:nth-child(2)
                  color #ccc
                  margin-top 5px
    .Msite_group
      width 100%
      height 226px
      .Msite_group_Seckill
        width 100%
        height 100px
        img
          width 100%
          height 100%
      .Msite_group_content
        width 100%
        overflow hidden
        .swiper-slide
          width 100%
          height 126px
          img
            width 100%
            height 100%
    .Msite_brand
      width 100%
      height 295px
      .Msite_brand_Seckill
        width 100%
        height 95px
        img
          width 100%
          height 100%
      >ul
        width 100%
        height 200px
        display flex
        flex-wrap wrap
        >li
          width 50%
          height 100px
          >img
            width 100%
            height 100px
    .Msite_Major
      width 100%
      overflow hidden
      background #000
      .Msite_Major_good
        width 100%
        height 99px
        img
          width 100%
          height 100%
      >ul
        width 100%
        height 4535px
        >li
          width 100%
          height 907px
          .Msite_left
            width 50%
            height 100%
            float left
            >ul
              width 100%
              height 100%
              >li
                width 100%
                height 25%
                >img
                  width 100%
                  height 99%
                  border-top  1px solid #ebebeb
          .Msite_right
            width 50%
            height 100%
            float right
            >ul
              width 100%
              height 100%
              >li
                width 100%
                height 25%
                >img
                  width 100%
                  height 99%
                  border-top  1px solid #ebebeb
    .Msite_Especially
      width 100%
      height 424px
      .Msite_Especially_star
        width 100%
        height 84.5px
        img
          width 100%
          height 100%
      .Msite_Especially_sale
        width 100%
        height 339.5px
        .Msite_Especially_sale_left
          float left
          width 188px
          height 339.5px
          img
            width 100%
            height 100%
        .Msite_Especially_sale_right
          float right
          width 187px
          height 339.5px
          .Msite_Especially_sale_right_one
            width  187px
            height 169.5px
            img
              width 100%
              height 100%
    .Msite_footer
      width 100%
      height 86px
      margin-bottom 55px
      ul
        margin 10px auto
        width 80%
        height 42px
        li
          text-align center
          float left
          width 70px
          line-height 42px
          font-size 14px
          color #333
          &.on
            color red
      .Msite_footer_text
        text-align center
        height 40px
        font-size 12px
        margin-top -10px
        vertical-align middle
</style>
