<template>
  <div class="Type">
    <!--头部-->
    <div class="Type_header" >
      <span class="Class_header_left">
        <span class="Class_header_right_text1" @click="setColor(true)" :class="{on:isShow}" >
          <span @click="goto('/type/class')">分类</span></span>
        <span class="Class_header_right_text2" @click="setColor(false)" :class="{on:!isShow}" >
          <span @click="goto('/type/brand')">品牌</span></span>
      </span>
      <span class="Class_header_right">
        <i class="iconfont icon-sousuo"></i>
      </span>
    </div>
    <Class :class="{on:isShow}"/>
    <Brand :class="{on:!isShow}"/>
  </div>
</template>

<script>
  import Class from './Class/Class.vue'
  import Brand from './Brand/Brand.vue'
  export default {
    data(){
      return{
        currentIndex:Number,
        isShow:true
      }
    },
    methods:{
      setIndex(index){
        this.currentIndex = index
      },
      setColor(isShow){
       this.isShow = isShow
     },
      goto(path){
        this.$router.replace(path)
      }
    },
    mounted(){
      //通知action异步获取分类列表
      this.$store.dispatch('getTypes')
      this.$store.dispatch('getBrand')
    },

    components:{
      Class,
      Brand
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .Type
    overflow hidden
    width 100%
    background-color #F3F4F5
    .Type_header
      position fixed
      left 0
      right 0
      top: 0
      width 100%
      height 40px
      z-index 200
      background-color #fff
      border-bottom 2px solid #e4e4e4
      span
        line-height 40px
        font-size 13px
        font-weight 600
        display inline-block
      .Class_header_left
        float left
        margin-left 40%
        .Class_header_right_text1
          margin-right 30px
          &.on
            color: #d76363
            border-bottom 2px solid #d76363
            font-weight 700
        .Class_header_right_text2
          margin-left 5px
          &.on
            font-weight 700
            color: #d76363
            border-bottom 2px solid #d76363
      .Class_header_right
        margin-right 10px
        float right
        .iconfont
          color #ccc
          font-size 14px
</style>

