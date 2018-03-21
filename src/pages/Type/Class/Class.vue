<template>
  <div class="Class">
    <!--分类列表-->
    <div class="Class_container" >
      <div class="Class_left" ref="List_left">
        <ul>
          <li v-for="(category,index) in categorys" :key="index"
          @click="setIndex(index)" :class="{on:index===currentIndex}">{{category.name}}</li>
        </ul>
      </div>
      <div class="Class_right" ref="right">
        <div class="Class_main">
          <div v-if="categorys[currentIndex]">
            <!--分类-->
            <div class="Class_main_top" v-if="item.type===0" v-for="(item,index) in categorys[currentIndex].cate_list" :key="index" >
              <p class="Class_hot">
                {{item.title}}
              </p>
              <ul>
                <li v-for="(item2,index) in item.list" :key="index">
                  <img :src="item2.photo" alt="">
                  <span>{{item2.name}}</span>
                </li>
              </ul>
            </div>
            <!--品牌-->
            <div class="Class_main_bottom" v-if="item.type===2" v-for="(item,index) in categorys[currentIndex].cate_list" :key="index" >
              <p class="Class_brand">
                {{item.title}}
              </p>
              <ul>
                <li v-for="(item2,index) in item.list" :key="index">
                  <img :src="item2.logo">
                  <span>{{item2.name}}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        currentIndex:0,
        cate_list:Object
      }
    },
    computed:{
      ...mapState(['categorys']),
    },
    mounted () {
      this.$nextTick(() => {

        this._initScroll();
      });
    },
    methods:{
      setIndex(index){
        this.currentIndex =index
      },
      _initScroll () {
        this.ListBoxScroll = new BScroll(this.$refs.List_left, {
          scrollY: true,
          click: true
        });
        this.BoxScroll = new BScroll(this.$refs.right, {
          scrollY: true,
          click: true
        });

      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .Class
    display none
    overflow hidden
    width 100%
    &.on
      display block
    .Class_container
      margin-top 40px
      width 100%
      overflow hidden
      background #fff
      .Class_left
        float left
        width 70px
        background #ffffff
        border-right 5px solid #F3F4F5
        height 570px
        ul
          width 100%
          text-align center
          color #333
          li
            width 70px
            height 49px
            border-right  1px solid #ffffff
            border-bottom 1px solid #F3F4F5
            line-height 49px
            font-size 13px
            &.on
              background-color #F3F4F5
              color #ED4044
      .Class_right
        float right
        width 295px
        height 570px
        .Class_main
          width 100%
          >div
            .Class_main_top
              width 295px
              .Class_hot
                margin-top 10px
                margin-left 10px
                color #7e8c8d
                font-size 14px
                width 290px
                height 30px
                line-height 30px
              >ul
                width 295px
                display flex
                flex-wrap wrap
                margin 0 auto
                font-size 13px
                color #333
                >li
                  width 96px
                  height 117px
                  text-align center
                  margin-bottom 50px
                  >img
                    width 86px
                    height 100px
            .Class_main_bottom
              width 295px
              .Class_brand
                margin-top 10px
                margin-left 10px
                color #7e8c8d
                font-size 14px
                width 290px
                height 30px
                line-height 30px
              >ul
                width 295px
                display flex
                flex-wrap wrap
                text-align center
                font-size 13px
                color #333
                >li
                  width 50%
                  height 80px
                  >img
                    width 135px
                    height 55px
                    border 1px solid #7e8c8d

</style>
