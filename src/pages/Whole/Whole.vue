<template>
  <div class="Whole">
    <PinPai/>
    <div class="Whole_container">
      <div class="Whole_content">
        <!--右侧字母-->
        <div class="Whole_right" ref="Whole_right">
          <ul>
            <li  v-for="(item,index) in whole" :key="index" :class="{on:index===currentIndex}" @click="setIndex(index)">{{item.order}}</li>
          </ul>
        </div>
        <!--左侧品牌-->
        <div class="Whole_left" ref="Whole_list">
          <ul ref="Whole_wrapper">
            <li v-for="(item,index) in whole" :key="index"  class="item_list" >
              <div class="Whole_left_item">
                <h2 class="Whole_left_item_h"><span>{{item.order}}</span></h2>
                <ul>
                  <li v-for="(item2,index) in item.list">
                    <div class="Whole_left_item_left">
                      <img :src="item2.logo" alt="">
                    </div>
                    <div class="Whole_left_item_right">
                      <p>{{item2.name}}</p>
                      <p>{{item2.address}}</p>
                    </div>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import PinPai from '../../compones/PinPai/PinPai.vue'
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        scrollY:0,//右侧Y轴滑动的坐标
        tops:[],//右侧分类小列表的top值
      }
    },
    mounted(){
      this.$store.dispatch('getWhole', ()=>{
        this.$nextTick(()=>{
          this._initTops()
          this._initScroll()
        })
      })
    },
    computed:{
      ...mapState(['whole']),
      //计算当前的索引值
      currentIndex(){
        const {tops,scrollY} = this
        // scrollY要>=当前的top && 小于下一个top
        return tops.findIndex((top, index) => scrollY>=top && scrollY<tops[index+1])
      }
    },
    methods:{
      _initScroll(){
        // 左侧品牌列表的BScroll
        this.leftScroll = new BScroll(this.$refs.Whole_list,{
          probeType: 2, // 手指滑动(惯性滑动和编码滑动不监视)
          scrollY: true,
          click: true //响应点击
        })
        // 监视滑动过程
        this.leftScroll.on('scroll', (pos) => {
          // 保存y
          this.scrollY = Math.abs(pos.y)
        })
        // 监视滑动结束
        this.leftScroll.on('scrollEnd',(pos) => {
          this.scrollY = Math.abs(pos.y)  // 解决惯性滑动更新
        })
      },
      _initTops(){
        const tops = []
        let top = 0
        // 计算各个 top, 并保存到tops
        tops.push(top)

        // 得到ul下所有的子li
        const lis = this.$refs.Whole_wrapper.getElementsByClassName('item_list')
        Array.prototype.slice.call(lis).forEach((li, index) => {
          top += li.clientHeight
          tops.push(top)
        })
        // 保存tops
        this.tops = tops
     },
      setIndex(index){
        // 得到滚动目标坐标
        const top = this.tops[index]
        // 更新目标scrollY值
        this.scrollY = top
        // 平滑滚动到指定位置
        this.leftScroll.scrollTo(0, -top)
      }
    },
    components: {
      PinPai
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .Whole
    width 100%
    .Whole_container
      width 100%
      height 29094px
      .Whole_content
        width 100%
        height 29094px
        .Whole_right
          position fixed
          width 10px
          right 4px
          margin-top 27%
          z-index 200
          >ul
            font-size 12px
            >li
              text-align center
              color #595959
              margin-top 2px
              &.on
                color red
        .Whole_left
          width 100%
          height 1000px
          >ul
            width 100%
            height 29094px
            >li
              width 100%
              background #fff
              .Whole_left_item
                width 100%
                .Whole_left_item_h
                  width 100%
                  height 24px
                  background #F3F4F5
                  line-height 24px
                  font-size 14px
                  color #7e8c8d
                  >span
                    margin-left 10px
                >ul
                  width 100%
                  >li
                    width 100%
                    height 72px
                    border-bottom 1px solid #F3F4F5
                    .Whole_left_item_left
                      float left
                      width 30%
                      height 51px
                      margin 10px
                      border 1px solid #F3F4F5
                      >img
                        width 100%
                        height 100%
                    .Whole_left_item_right
                      float right
                      width 58%
                      height 52px
                      margin 10px
                      >p:nth-child(1)
                        margin-top 10px
                        color #565656
                      >p:nth-child(2)
                        font-size 12px
                        color #7e8c8d
                        margin-top 5px
</style>
