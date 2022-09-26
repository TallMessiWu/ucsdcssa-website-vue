<template>
  <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
  />
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