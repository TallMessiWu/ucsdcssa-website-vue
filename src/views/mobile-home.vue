<template>
  <router-view/>
  <van-tabbar route active-color="#9f2725">
    <van-tabbar-item replace to="/mobile/home" icon="home-o">主页</van-tabbar-item>
    <van-tabbar-item replace to="/mobile/classes" icon="friends-o">课友群</van-tabbar-item>
    <van-tabbar-item replace to="/mobile/card" icon="credit-pay">CSSA卡</van-tabbar-item>
  </van-tabbar>


</template>

<script setup>
</script>

<script>
export default {
  name: "MobileHome"
}
</script>

<style scoped lang="less">

</style>