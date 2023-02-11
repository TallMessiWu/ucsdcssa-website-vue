<template>
  <!--主宣传图-->
  <el-row>
    <home-headline/>
  </el-row>

  <!--介绍-->
  <el-row>
    <home-intro/>
  </el-row>

  <!--文章合集-->
  <el-row class="article">
    <h2>近期公众号热门</h2>
    <p>点击标题阅读原文，或点击这里扫码关注我们</p>
    <el-tabs stretch="{{true}}" class="article-tab">
      <el-tab-pane class="article-tab-pane" label="全部">
        <home-articles class="single-article"/>
        <home-articles class="single-article"/>
        <home-articles class="single-article"/>
        <home-articles class="single-article"/>
        <home-articles class="single-article"/>
        <home-articles class="single-article"/>
      </el-tab-pane>
      <el-tab-pane class="article-tab-pane" label="活动回顾">
        <home-articles/>
        <home-articles/>
        <home-articles/>
      </el-tab-pane>
      <el-tab-pane class="article-tab-pane" label="求职信息"></el-tab-pane>
      <el-tab-pane label="推广"></el-tab-pane>
      <el-tab-pane label="新生必读">全部</el-tab-pane>
      <el-tab-pane label="政策解读">全部</el-tab-pane>
      <el-tab-pane label="学校信息更新">全部</el-tab-pane>
      <el-tab-pane label="大使馆信息发表">全部</el-tab-pane>
      <el-tab-pane label="活动推文">全部</el-tab-pane>
      <el-tab-pane label="学术干货">全部</el-tab-pane>
      <el-tab-pane label="友情转发">全部</el-tab-pane>
      <el-tab-pane label="独家赞助">全部</el-tab-pane>
      <el-tab-pane label="其他">全部</el-tab-pane>
    </el-tabs>
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
import { ArrowDown } from '@element-plus/icons-vue'
</script>

<style scoped>
.article{
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 68vw;
  margin-left: 16vw;
  /*border: 1px solid black;*/
}
.article-tab{
  width: 68vw;
}
.article-tab-pane{
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.5vw;
}
.single-article{
  margin-bottom: 3vw;
}



:deep(.el-tabs__active-bar){
  background-color: darkred;
}

:deep(.el-tabs__item:hover){
  color:darkred;
}

:deep(.el-tabs__item.is-active){
  color:darkred;
}
</style>
