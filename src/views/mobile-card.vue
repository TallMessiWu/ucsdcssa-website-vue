<template>
  <!--<button @click="getInstruction">get instruction</button>-->
  <div>开发中</div>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()

function getInstruction() {
  router.push("/card-instructions")
}
</script>
<script>
export default {
  name: "MobileCard"
}
</script>

<style scoped lang="less">

</style>