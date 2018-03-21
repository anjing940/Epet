<template>
  <footer class="footer_guide border-1px">
    <div class="guide_item" @click="goto('/msite')" :class="{on:$route.path==='/msite'}" >
      <span class="item_icon">
        <i class="iconfont icon-fangwuxinxi"></i>
      </span>
      <span class="item_text">首页</span>
    </div>
    <div class="guide_item" @click="goto('/type')":class="{on:$route.path.slice(0,5)==='/type'}">
      <span class="item_icon">
        <i class="iconfont icon-fenlei"></i>
      </span>
      <span class="item_text">分类</span>
    </div>
    <div class="guide_item" @click="goto('/cart')" :class="{on:$route.path==='/cart'}">
      <span class="item_icon">
        <i class="iconfont icon-gouwuche"></i>
      </span>
      <span class="item_text">购物车</span>
    </div>
    <div class="guide_item" @click="goto('/login')":class="{on:$route.path==='/login'}">
      <span class="item_icon">
        <i class="iconfont icon-xiaolian"></i>
      </span>
      <span class="item_text">我的E宠</span>
    </div>
  </footer>
</template>
<script>
  export default {
    methods:{
      goto(path){
        this.$router.push(path)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import "../../common/stylus/mixins.styl"
  .footer_guide
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    width 100%
    height 55px
    display flex
    background-color #fff
    .guide_item
      flex 1
      width 25%
      height 100%
      text-align center
      color #999
      &.on
        color: #2fa761
      & span
        font-size 12px
      .item_icon
        display block
        .iconfont
          font-size 30px
      .item_text
        display block
</style>
