<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <FooterGuide v-if="$route.meta.showFooter"/>
  </div>
</template>

<script>
  import FooterGuide from './compones/FooterGuide/ FooterGuide.vue'
  export default {
    components:{
      FooterGuide
    },
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>

