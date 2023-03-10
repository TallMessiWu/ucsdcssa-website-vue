<!--公众号板块组件-->
<template>
  <el-container class="article">
    <el-main @click="goToArticle">
      <!--板块标题-->
      <el-row justify="center">
        <!--图片显示不出来需要在index.html的head标签中加meta-->
        <!--https://blog.csdn.net/qq_42961150/article/details/121833692-->
        <!--这里width是22vw是因为下面的content有1vw的padding-->
        <el-image style="width: 21vw; height:10vw" :src="cover" fit="cover"></el-image>
      </el-row>
      <!--板块标题+板块标签-->
      <el-row justify="center" align="middle">
        <div class="articles-content">
          <h3 style="font-size: 1vw">{{ title }}</h3>
          <p style="color: black; font-size: 0.8vw;">{{ categories }}</p>
        </div>
      </el-row>


    </el-main>
  </el-container>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps(["title", "categories", "cover", "link"])

function goToArticle() {
  window.open(props.link)
}

</script>

<script>
export default {
  name: "HomeArticleTab"
}
</script>

<style scoped lang="less">

  :deep(.el-main) {
    color: rgba(196, 86, 86, 255);
  }

  :deep(.el-main:hover) {
    color: darkred;
  }

  .article {
    width: 19vw;
    margin-right: 2vw;
    margin-bottom: 3vw;
  }

  .articles-content {
    height: 5vw;
    width: 19vw;
    opacity: 0.8;
    z-index: 3;
    transition: all ease-in-out 0.1s;
    background: white;
    padding: 1vw;
    border-width: 0.5vw;
    border-color: #c2c2c2;
    border-top-style: hidden;
    box-shadow: 0 6px 16px rgb(0 0 0 / 20%);
  }

</style>