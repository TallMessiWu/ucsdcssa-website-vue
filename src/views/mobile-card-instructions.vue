<template>
  <van-config-provider :theme-vars="themeVars">
    <van-nav-bar
        title="获取CSSA卡"
        left-arrow
        @click-left="onClickLeft"
    >
      <template #left>
        <van-button icon="arrow-left" round color="#a8241c" size="small"/>
      </template>
    </van-nav-bar>
    <div>card instructions</div>
  </van-config-provider>
</template>

<script setup>
const onClickLeft = () => history.back();

const themeVars = {
  navBarBackgroundColor: "#C22A1E",
  navBarTextColor: "white"
}

</script>
<script>
export default {
  name: "MobileCardInstructions"
}
</script>

<style scoped lang="less">

</style>