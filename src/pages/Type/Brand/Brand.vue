<template>
  <div class="Brand">
    <ul>
      <li v-for="(item,index) in brand" :key="index">
        <div class="Brand_title">
          <span>——{{item.title}}——</span>
        </div>
        <div class="Brand_container">
          <ul>
            <li v-for="(item2,index) in item.list" :key="index" >
              <div class="Brand_img">
                <img :src="item2.logo">
              </div>
              <p class="Brand_text1">{{item2.name}}</p>
              <p class="Brand_text2">{{item2.address}}</p>
            </li>
          </ul>
        </div>
      </li>
    </ul>
    <div class="whole" @click="goto('/whole')">全部</div>
  </div>

</template>
<script>
  import {mapState} from 'vuex'
  export default {
    computed:{
      ...mapState(['brand']),
    },
    methods:{
      goto(path){
        this.$router.replace(path)
      }
    }

  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../../common/stylus/mixins.styl"
  .Brand
    display none
    width 100%
    border #F3F4F5
    &.on
      display block
      >ul
        margin-top 40px
        >li
          background #fff
          .Brand_title
            margin-top 10px
            width 100%
            height 70px
            color #999
            text-align center
            font-size 12px
            span
              line-height 70px
          .Brand_container
            width 100%
            ul
              display flex
              flex-wrap wrap
              width 363px
              margin 0 auto
              li
                width 111px
                height 97px
                padding 5px
                text-align center
                .Brand_img
                  width 111px
                  height 62px
                  border 1px solid #ccc
                  img
                    margin-top 10px
                    width 70px
                    height 40px
                .Brand_text1
                  width 111px
                  height 20px
                  line-height 20px
                  font-size 13px
                .Brand_text2
                  width 111px
                  height 20px
                  line-height 20px
                  font-size 13px
                  color #999
      .whole
        position fixed
        bottom 15%
        right 5px
        width 40px
        height 40px
        background rgba(#6F6F6F,0.7)
        border-radius 20px
        text-align center
        line-height 40px
        color #fff
        font-size 13px
        font-weight bold
</style>
