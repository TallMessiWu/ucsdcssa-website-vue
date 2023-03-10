<template>
  <router-view/>
</template>

<script setup>
import {isMobile} from "./utils/isMobile"
import {useRoute, useRouter} from "vue-router";

const router = useRouter()

const route = useRoute()

// 这里卡了好久。路由是异步的，所以直接使用route.query是空的，需要等待路由加载完成后再使用。
// https://stackoverflow.com/questions/69495211/vue3-route-query-empty
async function directToCorrectHomePage() {
  await router.isReady();
  // 首先判断是否强制访问手机端或电脑端
  if (route.query.force) {
    if (route.query.force === "mobile") {
      router.replace("/mobile/home")
    } else if (route.query.force === "pc") {
      router.replace("/home")
    }
  } else {
    if (isMobile()) {
      router.replace("/mobile/home")
    } else {
      router.replace("/home")
    }
  }
}

directToCorrectHomePage()

</script>
<script>
export default {
  name: 'App'
}
</script>
