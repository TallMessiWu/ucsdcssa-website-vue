<template>
  <div class="container">
    <h1>开发中</h1>
  </div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()

function getInstruction() {
  router.push({name: "MobileCardInstructions"})
}
</script>
<script>
export default {
  name: "MobileCard"
}
</script>

<style scoped lang="less">
  .container {
    display: flex;
    height: 80vh;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
</style>