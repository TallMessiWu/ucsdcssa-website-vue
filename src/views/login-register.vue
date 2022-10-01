<template>
  <div>login-register</div>
</template>

<script setup>
import {isMobile} from "../utils/isMobile"
import {useRoute, useRouter} from "vue-router"


const route = useRoute()
const router = useRouter()
if (isMobile()) {
  router.replace({path: "/mobile-login-register", query: {destination: route.query.destination}})
}
</script>

<script>
export default {
  name: "LoginRegister"
}
</script>

<style scoped lang="less">

</style>