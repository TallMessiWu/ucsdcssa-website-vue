<template>
  <van-config-provider :theme-vars="themeVars">
    <van-nav-bar :title="title" fixed placeholder/>
    <router-view/>
    <van-tabbar route active-color="#C22A1E" placeholder>
      <van-tabbar-item replace to="/mobile/home" icon="home-o">主页</van-tabbar-item>
      <van-tabbar-item replace to="/mobile/classes" icon="friends-o">课友群</van-tabbar-item>
      <van-tabbar-item replace to="/mobile/card" icon="credit-pay">CSSA卡</van-tabbar-item>
    </van-tabbar>
  </van-config-provider>

</template>

<script setup>
import {onBeforeRouteUpdate, useRoute} from "vue-router";

const themeVars = {
  navBarBackgroundColor: "#C22A1E",
  navBarTextColor: "white"
}

// 设置导航栏标题
const route = useRoute()
const titles = {
  "MobileHome": "主页",
  "MobileClasses": "课友群",
  "MobileCard": "CSSA卡"
}
let title = $ref(titles[route.name])
// 监听路由变化
onBeforeRouteUpdate(to => {
  title = titles[to.name]
})

</script>

<script>
export default {
  name: "MobileHome"
}
</script>

<style scoped lang="less">

</style>

<style lang="less">
  .van-nav-bar {
    z-index: 100;
  }

  .van-nav-bar__title {
    font-weight: bolder;
    color: white;
    font-size: 20px;
  }

  .van-nav-bar .van-icon {
    font-size: 18px;
    color: white;
  }

</style>