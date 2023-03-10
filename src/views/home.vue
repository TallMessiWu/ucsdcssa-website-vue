<template>
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
    <home-faq/>
  </el-row>

  <!--返回顶部按钮-->
  <el-backtop style="color: rgba(196, 86, 86, 255); --el-backtop-hover-bg-color: rgba(253, 226, 226, 255);"/>
</template>

<script setup>
import HomeHeadline from "../components/home-headline.vue";
import HomeIntro from "../components/home-intro.vue";
import HomeArticles from "../components/home-articles.vue";
import HomeFaq from "../components/home-faq.vue";</script>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>
