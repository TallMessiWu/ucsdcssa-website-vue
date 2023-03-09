<!--公众号热门推荐板块-->
<template>
  <el-container class="container">

    <!--顶部标题+小标题-->
    <el-header>
      <el-row justify="center">
        <h2>近期公众号热门</h2>
      </el-row>
      <el-row justify="center">
        <p>点击标题阅读原文，或点击这里扫码关注我们</p>
      </el-row>
    </el-header>

    <!--主体板块-->
    <el-main>
      <el-row justify="center">

        <!--板块种类区分-->
        <el-tabs stretch class="article-tab" @tab-change="onTabChange">
          <!--具体种类所属的板块-->
          <el-tab-pane v-for="category in categories" :label="category" lazy>
            <el-row class="article-tab-pane">
              <el-col :span="8" v-for="article in articles">
                <article-tab :title="article['title']" :categories="article['categories']" :cover="article['cover']"
                             :link="article['link']"/>
              </el-col>
            </el-row>
          </el-tab-pane>

        </el-tabs>
      </el-row>
    </el-main>
  </el-container>

</template>

<script setup>
import ArticleTab from "../components/article-tab.vue";
import {getAssetsFile} from "../utils/getAssetsFile";
import {classified} from "../classified";
import {inject} from "vue";

const categories = ["全部", "活动推文", "学术干货", "新生必读", "生活周边", "政策要闻", "推广赞助", "其他"]
let articles = $ref([{
  title: "新生教程｜新生体检&疫苗&TB Test超详细攻略",
  categories: "新生必读",
  cover: getAssetsFile('logo.png')
}])
let activeTab = $ref("全部")

const axios = inject('axios')

async function getArticles(category) {
  articles = (await axios.get(`${classified.backendAddress}/articles/${articles.length}/${category}`)).data
}

getArticles(activeTab)

function onTabChange(activeTabIndex) {
  activeTab = categories[activeTabIndex]
  getArticles(activeTab)
}

</script>

<script>
export default {
  name: "HomeArticles"
}
</script>

<style scoped lang="less">

  .container {
    background-color: white;
    padding-top: 2vw;
    padding-bottom: 2vw;
    overflow: visible;
  }

  h2 {
    font-size: 1.261vw;
  }

  p {
    font-size: 0.841vw;
  }

  :deep(.el-header) {
    height: 10vw;
  }

  .article-tab {
    width: 68vw;
  }

  .article-tab-pane {
    padding-left: 0.5vw;
  }

  :deep(.el-tabs__active-bar) {
    background-color: darkred;
  }

  :deep(.el-tabs__item:hover) {
    color: darkred;
  }

  :deep(.el-tabs__item.is-active) {
    color: darkred;
  }
</style>