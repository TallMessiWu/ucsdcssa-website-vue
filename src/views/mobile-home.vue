<template>
  <!--这里需要设置css .van-pull-refresh的overflow为visible才能显示全部内容-->
  <div class="container">
    <!--头条-->
    <van-swipe class="swiper" :autoplay="2500" indicator-color="white">
      <van-swipe-item v-for="article in headlines">
        <div class="headline-container" @click="goToArticle(article['link'])">
          <van-image class="headline-cover" :src="article['cover']" fit="cover"/>
          <div class="headline-title-container">
            <div class="headline-title">
              {{ article.title }}
            </div>
          </div>
        </div>
      </van-swipe-item>
    </van-swipe>
    <!--文章-->
    <van-tabs class="tabs" v-model:active="activeIndex" animated swipeable border offset-top="12vw"
              title-active-color="#8b0000">
      <van-tab v-for="category in staticVariables.categories" :title="category">
        <div class="articles">
          <div class="article-container" v-for="article in articles" @click="goToArticle(article['link'])">
            <!--van-image默认的display是inline-block！！！巨坑，卡了好久，底下老是有缝隙。改成block就好了-->
            <van-image class="article-cover" :src="article['cover']" fit="cover"></van-image>
            <div class="article-title">
              {{ article.title }}
            </div>
          </div>
          <!--加载更多按钮-->
          <van-button v-if="articles.length" plain type="danger" style="margin-bottom: 5vw" round :loading="loading"
                      loading-text="加载中..."
                      class="load-more"
                      @click="loadMore">加载更多
          </van-button>
          <!--无内容时显示-->
          <div v-if="!articles.length" style="margin-bottom: 3vw;">
            无更多内容
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>

  <!--Vant 4有backtop但是Vant 3没有 QAQ。于是只能用element plus的。-->
  <el-backtop style="color: rgba(196, 86, 86, 255); --el-backtop-hover-bg-color: rgba(253, 226, 226, 255);" bottom="80"
              visibility-height="400"/>

</template>

<script setup>
import {computed, inject, watch} from "vue";
import {classified} from "../classified";
import {staticVariables} from "../staticVariables";
import {useRouter} from "vue-router";


let headlines = $ref([])

const axios = inject("axios")
const router = useRouter()

async function getHeadlines() {
  headlines = (await axios.get(`${classified.backendAddress}/headlines`)).data
}

getHeadlines()

const activeIndex = $ref(0)
let activeTab = $ref(computed(() => staticVariables.categories[activeIndex]))
let articles = $ref([])
let loading = $ref(false)

watch($$(activeTab), () => {
  getArticles(activeTab)
})

async function getArticles(category) {
  articles = (await axios.get(`${classified.backendAddress}/articles/0/${category}`)).data
}

getArticles(activeTab)

function goToArticle(link) {
  window.location.href = link
}

async function loadMore() {
  loading = true
  articles = articles.concat((await axios.get(`${classified.backendAddress}/articles/${articles.length}/${activeTab}`)).data)
  loading = false
}

</script>

<script>
export default {
  name: "MobileHome"
}
</script>

<style scoped lang="less">
  .container {
    display: flex;
    padding-top: 3vw;
    flex-direction: column;
    align-items: center;
  }

  .swiper {
    width: 95%;
    height: 55vw;
  }

  .headline-container {
    width: 100%;
    height: 100%;
  }

  .headline-cover {
    width: 100%;
    height: 100%;
  }

  .headline-title-container {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-weight: bold;
    font-size: 4vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .headline-title {
    margin-bottom: 2vw;
    text-align: center;
  }

  .tabs {
    margin-top: 5vw;
    width: 95%;
    height: 55vw;
  }

  :deep(.van-tabs__wrap) {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }


  .articles {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3vw;
    margin-bottom: 15vw;
    background-color: white;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

  .article-container {
    display: flex;
    // 如果articles设置为flex布局，那么这个的height会失效，需要设置flex-shrink为0
    // https://blog.csdn.net/Andrew_SJ/article/details/118940778
    flex-shrink: 0;
    flex-direction: column;
    align-items: center;
    width: 95%;
    height: 55vw;
    margin-bottom: 5vw;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 6px 16px rgb(0 0 0 / 20%);
  }

  :deep(.van-image) {
    //van-image默认的display是inline-block！！！巨坑，卡了好久，底下老是有缝隙。改成block就好了
    display: block;
  }

  .article-cover {
    width: 100%;
    height: 70%;
  }

  .article-title {
    width: 95%;
    height: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-size: 3.7vw;
    font-weight: 500;
  }

  .load-more {
    width: 80%;
  }
</style>