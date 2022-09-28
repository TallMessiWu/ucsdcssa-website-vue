<template>
  <van-nav-bar
      title="标题"
      left-arrow
      @click-left="onClickLeft"
  >
    <template #left>
      <van-button icon="arrow-left" round color="#a8241c" size="small"/>
    </template>
  </van-nav-bar>
  <div>card instructions</div>
</template>

<script setup>
const onClickLeft = () => history.back();
</script>
<script>
export default {
  name: "MobileCardInstructions"
}
</script>

<style scoped lang="less">

</style>