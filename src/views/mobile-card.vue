<template>
  <button @click="getInstruction">get instruction</button>
</template>

<script setup>
import {useRouter} from "vue-router";

const router = useRouter()

function getInstruction() {
  router.push("card-instructions")
}
</script>
<script>
export default {
  name: "MobileCard"
}
</script>

<style scoped lang="less">

</style>