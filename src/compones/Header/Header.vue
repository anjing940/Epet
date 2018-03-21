<template>
    <div class="Cart_top">
      <div class="header">
        <span><i class="iconfont icon-jiantou3" @click="$router.back()"></i></span>
        <span>购物车</span>
        <span @click="getCar"><i class="iconfont icon-erweima"></i></span>
      </div>
      <transition name="slide">
        <div class="nav" v-if="isShow">
          <router-link to="/msite" tag="a"   href="javascript:;">
            <span><i class="iconfont icon-fangwuxinxi"></i></span>
            <span>首页</span>
          </router-link>
          <router-link  to="/type" tag="a"  href="javascript:;">
            <span><i class="iconfont icon-fenlei"></i></span>
            <span>分类列表</span>
          </router-link>
          <router-link  to="/cart" tag="a" href="javascript:;">
            <span><i class="iconfont icon-gouwuche"></i></span>
            <span>购物车</span>
          </router-link>
          <router-link  to="/login" tag="a"  href="javascript:;">
            <span><i class="iconfont icon-xiaolian"></i></span>
            <span>我的e宠</span>
          </router-link>
        </div>
      </transition>
    </div>
</template>
<script>
  export default {
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      getCar(){
        this.isShow = !this.isShow
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .Cart_top
    width 100%
    .header
      height: 50px;
      line-height: 50px;
      position: relative;
      padding: 0 1em;
      border-bottom: 1px solid #b6cbcc
      text-align center
      background #fff
      >span
        line-height 50px
        >.iconfont
          color #7e8c8d
          font-size 20px
      >span:nth-child(1)
        float left
      >span:nth-child(2)
        font-size 18px
      >span:nth-child(3)
        float right
    .nav
      height 70px
      overflow hidden
      display flex
      width 100%
      background #fff
      border-bottom 1px solid #B6CBCC
      &.slide-enter-active
        transition all 1s ease-out
      &.slide-leave-active
        transition all 1.5s ease-out
      &.slide-enter,&.slide-leave-to
        height 0
      >a
        width 25%
        display flex
        flex 1
        text-align center
        flex-direction column
        align-items center
        >span:nth-child(1)
          margin-top 10px
          .iconfont
            font-size 35px
        >span
          font-size 14px
          color #7e8c8d
</style>
