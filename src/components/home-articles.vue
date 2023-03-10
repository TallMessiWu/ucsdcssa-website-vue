<!--公众号热门推荐板块-->
<template>
  <el-container class="container">

    <!--顶部标题+小标题-->
    <el-header>
      <el-row justify="center">
        <h2>近期公众号热门</h2>
      </el-row>
      <el-row justify="center">
        <!--这里要打开的图片需要放到public文件夹下。-->
        <p>点击标题阅读原文，或点击<a target="_blank" href="/公众号海报.jpg">这里</a>扫码关注我们</p>
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
                <home-article-tab :title="article['title']" :categories="article['categories']"
                                  :cover="article['cover']"
                                  :link="article['link']"/>
              </el-col>
            </el-row>
            <el-row justify="center" v-if="articles.length">
              <el-button type="danger" plain round @click="loadMore()" :loading="loading">加载更多</el-button>
            </el-row>
            <el-row justify="center" v-if="!articles.length">
              无更多内容
            </el-row>
          </el-tab-pane>

        </el-tabs>
      </el-row>
    </el-main>
  </el-container>

</template>

<script setup>
import HomeArticleTab from "./home-article-tab.vue";
import {classified} from "../classified";
import {staticVariables} from "../staticVariables";
import {inject} from "vue";

const categories = staticVariables.categories
let articles = $ref([])
let activeTab = $ref("全部")

const axios = inject('axios')

let loading = $ref(false)

async function getArticles(category) {
  articles = (await axios.get(`${classified.backendAddress}/articles/0/${category}`)).data
}

getArticles(activeTab)

async function loadMore() {
  loading = true
  articles = articles.concat((await axios.get(`${classified.backendAddress}/articles/${articles.length}/${activeTab}`)).data)
  loading = false
}

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

  a {
    color: rgb(152, 47, 45);

    &:hover {
      color: #FF7E54;
    }
  }

  .article-tab {
    width: 68vw;
  }

  .article-tab-pane {
    padding-left: 1vw;
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