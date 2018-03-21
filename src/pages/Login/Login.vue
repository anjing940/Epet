<template>
  <div class="Login">
    <div class="Login_header">
      <div class="Login_header_top">
        <span class="Login_header_top_left" >
          <i class="iconfont icon-jiantou3" @click="$router.back()"></i>
        </span>
        <span class="Login_header_top_right">
          注册
        </span>
      </div>
      <div class="Login_header_bottom">
        <div class="Login_header_bottom_left">
          <span :class="{on:loginWay}" @click="setLoginWay(true)">普通登录</span>
        </div>
        <div class="Login_header_bottom_right">
          <span :class="{on:!loginWay}" @click="setLoginWay(false)">手机动态密码登录</span>
        </div>
      </div>
    </div>
    <div class="Login_content">
      <form>
        <!--普通登录-->
        <div class="Login_content_input"  :class="{on:loginWay}">
          <ul>
            <li>
              <span><i class="iconfont icon-touxiang"></i></span>
              <input type="text" placeholder="手机号/邮箱/用户名" class="text" v-model="name">
            </li>
            <li>
              <span><i class="iconfont icon-suo"></i></span>
              <input type="password" placeholder="输入密码" class="text" v-model="pwd">
            </li>
          </ul>
        </div>
        <!--密码登录注册-->
        <div class="Login_content_psw"  :class="{on:!loginWay}">
          <ul >
            <li>
              <span><i class="iconfont icon-shouji"></i></span>
              <input type="text" maxlength="11" placeholder="已注册的手机号" v-model="phone" :class="{right_phone:rightPhone}" >
            </li>
            <li>
              <span><i class="iconfont icon-suo"></i></span>
              <input type="text" placeholder="请输入图片内容" v-model="picture">
              <span><img src="../../common/images/login/seccode.jpg"></span>
            </li>
            <li>
              <span><i class="iconfont icon-suo"></i></span>
              <input type="text" class="dttext" placeholder="动态密码" v-model="code">
              <a href="javascript:void(0);"class="get_phonepass afff ft12 " id="scodebtn">获取动态密码</a>
            </li>
          </ul>
        </div>
      </form>
      <div class="Login_cont">
        <p class="Login_cont_pwd">忘记密码?</p>
        <input @click="submitBtn" type="submit" value="登 录"/>
        <p class="Login_cont_login">合作网站登录</p>
        <ul>
          <li><img src="../../common/images/login/login_ico2.png" alt=""></li>
          <li><img src="../../common/images/login/login_ico4.png" alt=""></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import { MessageBox, Toast} from 'mint-ui';
  export default {
    data(){
      return{
        loginWay: true, // true代表用户登陆, false密码登陆
        //普通登录
        name:'',//用户名
        pwd:'',//密码

        //手机动态密码登录
        phone:'',//手机号
        code:'',//验证码
        picture:''//图片

      }
    },
    computed:{
      rightPhone(){
        // 以1开头的11数字
        return /^1\d{10}$/.test(this.phone)
      }
    },
    methods:{
      setLoginWay(loginWay){
        this.loginWay = loginWay
      },
      submitBtn(){
        let result;
        if(this.loginWay){//判断登录方式是普通
            const {name,pwd} = this
          if(!name){
            MessageBox.alert("请输入用户名","提示")
            return
          }else if(!pwd){
            MessageBox.alert("请输入密码","提示")
            return
          }else{
            MessageBox.alert('登录成功').then(action => {
              this.$router.replace('/msite')
            });
          }
        }else {
            const {phone,code,picture} = this
          if(!/^1\d{10}$/.test(phone)){
            MessageBox.alert("请输入手机号","提示")
            return
          }else if(!/^\d{6}$/.test(code)){
            MessageBox.alert("请输入验证码","提示")
          }else if(!picture){
            MessageBox.alert("请输入密码","提示")
          }else{
            MessageBox.alert('登录成功').then(action => {
              this.$router.replace('/msite')
            });
          }
        }
      }
    },
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "../../common/stylus/mixins.styl"
  .Login
    width 100%
    .Login_header
      bottom-border-1px(#e4e4e4)
      width 100%
      height 180px
      background-image url("../../common/images/login/d6aa601c1a4b5789b776f18261a960f6.png")
      background-repeat no-repeat
      background-size 100% 180px
      position relative
      .Login_header_top
        width 100%
        height 50px
        span
          line-height 50px
          font-size 15px
          color #fff
        .Login_header_top_left
          float left
          margin-left 10px
        .Login_header_top_right
          float right
          margin-right 10px
      .Login_header_bottom
        width 100%
        height 44px
        position absolute
        bottom 0
        line-height 44px
        text-align center
        font-size 15px
        .Login_header_bottom_left
          width 50%
          color #fff
          font-weight bold
          background-color rgba(#fff .2)
          float left
        .Login_header_bottom_right
          float right
          width 50%
          color #fff
          font-weight bold
          background-color rgba(#fff .2)
    .Login_content
      width 100%
      height 409px
      form
        >div
          display none
          &.on
            display block
        .Login_content_input
          width 90%
          height 92px
          margin 0 auto
          ul
            width 100%
            height 92px
            li
              line-height 46px
              width 100%
              height 46px
              border-bottom 1px solid #ccc
              font-size 14px
              span
                margin-left 5px
                .iconfont
                  font-size 20px
                  color #dedede
              input[type='text']
                color #dedede
                outline none
                background none
              input[type='password']
                color #dedede
                outline none
                background none
              input[type='text']::-webkit-input-placeholder
                color: #dedede;
              input[type='password']::-webkit-input-placeholder
                color #dedede
    .Login_content_psw
          width 90%
          height 138px
          margin 0 auto
          position relative
          ul
            width 100%
            height 138px
            li
              line-height 46px
              width 100%
              height 46px
              border-bottom 1px solid #ccc
              font-size 14px
              span
                margin-left 5px
                img
                  position absolute
                  right 0
                .iconfont
                  font-size 20px
                  color #dedede
              input[type='text']
                color #dedede
                outline none
                background none
              input[type='password']
                color #ccc
                outline none
                background none
              input[type='text']::-webkit-input-placeholder
                color: #dedede;
              a
                font-size 12px
                text-align center
                display block
                width 100px
                height 25px
                line-height 30px
                border 1px solid red
                border-radius 3px
                color red
                position absolute
                right 0
                top 105px
      .Login_cont
        width 100%
        text-align center
        .Login_cont_pwd
          margin-top 15px
          font-size 14px
          color #999
          float right
          margin-right 10px
        input[type='submit']
          width 90%
          height 35px
          border-radius 5px
          background #2EC975
          outline none
          margin-top 10px
          color #fff
          font-size 15px
          font-weight 700
        .Login_cont_login
          margin-top 150px
          color #ccc
        ul
          margin-top 20px
          width 100%
          height 67px
          display flex
          li
            width 57px
            height 57px
            margin 5px 20px
            img
              width 100%
              height 100%

</style>
