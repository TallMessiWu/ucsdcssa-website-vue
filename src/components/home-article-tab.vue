<!--公众号板块组件-->
<template>
  <el-container class="article">
    <el-main @click="goToArticle">
      <!--板块标题-->
      <!--图片显示不出来需要在index.html的head标签中加meta-->
      <!--https://blog.csdn.net/qq_42961150/article/details/121833692-->
      <!--el-image和van-image一样，需要改display为block。要不然下方会有间距。-->
      <el-image class="article-cover" :src="cover" fit="cover"></el-image>
      <!--板块标题+板块标签-->
      <div class="articles-content">
        <div class="article-title">
          <text>{{ title }}</text>
        </div>
        <div class="article-categories" v-if="categories">{{ categories }}</div>
      </div>


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
    height: 15vw;
    margin-right: 2vw;
    margin-bottom: 3vw;
  }

  .article-cover {
    width: 100%;
    height: 60%;
    display: block;
  }

  .articles-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 1vw;
    width: 100%;
    height: 40%;
    opacity: 0.8;
    z-index: 3;
    transition: all ease-in-out 0.1s;
    border-width: 0.5vw;
    border-color: #c2c2c2;
    border-top-style: hidden;
    box-shadow: 0 6px 16px rgb(0 0 0 / 20%);
  }

  .article-title {
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    font-size: 0.9vw;
    font-weight: 600;
  }

  .article-categories {
    width: 100%;
    height: 30%;
    margin-top: 0.5vw;
    color: black;
    font-size: 0.8vw;
  }

</style>