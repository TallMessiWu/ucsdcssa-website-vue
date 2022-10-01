<template>
  <van-config-provider :theme-vars="themeVars">
    <van-nav-bar
        :title="'登录'"
        left-arrow
        @click-left="onClickLeft"
    >
      <template #left>
        <van-button icon="wap-home-o" round color="#a8241c" size="small"/>
      </template>
    </van-nav-bar>
  </van-config-provider>
  <van-tabs v-model:active="activeName">
    <div class="form-container">
      <van-image :src="logo" width="36vw" class="logo"/>
      <van-tab title="登录" name="login">
        <mobile-login :destination="route.query.destination"/>
      </van-tab>
      <van-tab title="注册" name="register">
        <mobile-register :destination="route.query.destination"/>
      </van-tab>
    </div>
  </van-tabs>

</template>

<script setup>
import logo from "../assets/logo.png"
import MobileLogin from "../components/mobile-login.vue"
import MobileRegister from "../components/mobile-register.vue"
import {useRoute, useRouter} from "vue-router"

const route = useRoute()
const router = useRouter()

const activeName = $ref("login")
const onClickLeft = () => router.replace("/mobile/home");

const themeVars = {
  navBarBackgroundColor: "#C22A1E",
  navBarTextColor: "white"
}
</script>

<script>
export default {
  name: "MobileLoginRegister"
}
</script>

<style scoped lang="less">
  .form-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>