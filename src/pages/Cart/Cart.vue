<template>
  <div class="Cart">
    <Header/>
    <div class="Cart_content">
      <div class="Cart_content_cart"></div>
      <div class="Cart_content_text">购物车是空的</div>
      <span class="Cart_content_text_span1">去逛逛</span>
      <span class="Cart_content_text_span2">我的收藏</span>
    </div>
  </div>
</template>
<script>
  import Header from '../../compones/Header/Header.vue'
  export default {
    components: {
      Header
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .Cart
    width 100%
    background #F5F5F5
    height 667px
    .Cart_content
      width 100%
      height 300px
      background #fff
      position relative
      .Cart_content_cart
        width 120px
        height 110px
        position absolute
        left 35%
        top 70px
        background-image url("../../common/images/shopcart/cart-ico.png")
        background-repeat no-repeat
        background-position 14px -151px
        background-size 100px
      .Cart_content_text
        position absolute
        left 38%
        top 180px
        color #ccc
        font-size 18px
      .Cart_content_text_span1
        text-align center
        position absolute
        display block
        border 1px solid #ccc
        width 90px
        height 35px
        line-height 35px
        left 24%
        top 220px
        color #ccc
        font-size 18px
        border-radius 5px
      .Cart_content_text_span2
        text-align center
        position absolute
        display block
        border 1px solid #ccc
        width 90px
        height 35px
        line-height 35px
        left 53%
        top 220px
        color #ccc
        font-size 18px
        border-radius 5px
</style>
