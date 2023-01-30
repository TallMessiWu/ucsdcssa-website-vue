<template>

  <el-image :src="getAssetsFile('../assets/images/logo.png')"></el-image>
  <!--主宣传图-->
  <el-row>
    <home-headline/>
  </el-row>

  <!--介绍-->
  <el-row>
    <home-intro/>
  </el-row>

  <!--文章合集-->
  <el-row>
    <home-articles/>
  </el-row>

  <!--问答-->
  <el-row>
    <home-faq></home-faq>
  </el-row>


</template>

<script setup>
import HomeHeadline from "../components/home-headline.vue";
import HomeIntro from "../components/home-intro.vue";
import HomeArticles from "../components/home-articles.vue";
import HomeFaq from "../components/home-faq.vue";
import {getAssetsFile} from "../utils/getAssetsFile";</script>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>
</style>
