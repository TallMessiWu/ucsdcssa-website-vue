<template>
  <van-pull-refresh v-model="loading" @refresh="onRefresh">
    <div class="container">
      <van-config-provider :theme-vars="themeVars">

        <!--搜索栏-->
        <van-search v-model.trim="search" shape="round" placeholder="请输入要搜索的课名" @input="onInput"
                    background="rgba(242, 242, 242, 0)"/>
        <!--搜索页面-->
        <template v-if="search">
          <div class="search-result-container">
            <van-collapse v-for="course in result" v-model="activeNames"
                          accordion>
              <van-collapse-item :title="course" :name="course">
                <van-image :src="`${classified.backendAddress}/courses/${course}`" alt="" lazy-load width="100%"
                           ref="img">
                  <template #loading>
                    <div class="loading-container">
                      <van-loading type="spinner" size="60"/>
                    </div>
                  </template>
                </van-image>
                <van-button round type="danger" plain class="button" @click="assistantQRCode">
                  如果二维码失效，请点此联系小助手
                </van-button>
              </van-collapse-item>
            </van-collapse>
          </div>
        </template>

        <!--主页面-->
        <van-index-bar v-show="!search" :index-list="Object.keys(coursesGrouped)">
          <template v-for="(courses, key) in coursesGrouped">
            <van-index-anchor :index="key"/>
            <div class="group-container">
              <van-collapse v-for="course in courses" v-model="activeNames" accordion>
                <van-collapse-item :title="course" :name="course">
                  <van-image :src="`${classified.backendAddress}/courses/${course}`" alt="" lazy-load width="100%"
                             ref="img">
                    <template #loading>
                      <div class="loading-container">
                        <van-loading type="spinner" size="60"/>
                      </div>
                    </template>
                  </van-image>
                  <van-button round type="danger" plain class="button" @click="assistantQRCode">
                    如果二维码失效，请点此联系小助手
                  </van-button>
                </van-collapse-item>
              </van-collapse>
            </div>
          </template>
        </van-index-bar>
      </van-config-provider>
    </div>
  </van-pull-refresh>

</template>

<script setup>
import {inject} from "vue";
import {ImagePreview, Toast} from "vant";
import 'vant/es/image-preview/style';
import 'vant/es/toast/style';
import {useRouter} from "vue-router";
import {classified} from "../classified";

const axios = inject("axios")
const router = useRouter()

// 获取课程列表
let coursesGrouped = $ref({})
let courses = []

function getCoursesGrouped() {
  Toast.loading({
    duration: 0,
    message: '加载中...',
    forbidClick: true,
    loadingType: 'spinner'
  })
  axios.get(
      "/courses", {
        headers: {
          token: localStorage.getItem("token"),
          id: localStorage.getItem("id")
        }
      })
      .then(res => {
        coursesGrouped = res.data
        courses = Object.values(coursesGrouped).reduce((prev, cur) => prev.concat(cur), [])
        loading = false
        Toast.clear()
      })
      .catch((err) => {
        Toast.clear()
        Toast.fail(err.response.data);
        localStorage.removeItem("token")
        localStorage.removeItem("id")
        loading = false
        router.replace({name: "MobileLoginRegister", query: {destination: "/mobile/classes"}})
      })
}

getCoursesGrouped()

// 刷新功能
let loading = $ref(false);

function onRefresh() {
  coursesGrouped = {}
  courses = []
  getCoursesGrouped()
}

const themeVars = {
  searchContentBackgroundColor: "white"
}

//搜索功能
const search = $ref('')
let activeNames = $ref('')

let result = $ref([])

function onInput() {
  activeNames = ''
  // 用户输入小写并去除空格
  const searchFormatted = search.toLowerCase().replaceAll(" ", "")
  // 模糊查询
  result = courses.reduce((prev, cur) => {
    if (cur.toLowerCase().replaceAll(" ", "").indexOf(searchFormatted) !== -1) {
      return prev.concat([cur])
    }
    return prev
  }, [])
}

// 展示小助手页面
function assistantQRCode() {
  // 分摊小助手工作
  if (Math.random() < 0.5) {
    ImagePreview([`${classified.backendAddress}/assistants/1`, `${classified.backendAddress}/assistants/2`]);
  } else {
    ImagePreview([`${classified.backendAddress}/assistants/2`, `${classified.backendAddress}/assistants/1`]);
  }
}

</script>
<script>
export default {
  name: "MobileClasses"
}
</script>

<style scoped lang="less">
  .container {
    padding: 25px;
  }

  .search-result-container {
    margin-top: 20px;
    border-radius: 15px;
    overflow: hidden;
  }

  .loading-container {
    width: 293px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .van-search {
    padding: 0;
  }

  :deep(.van-index-anchor--sticky) {
    transform: translate3d(0px, 46px, 0px);
  }

  .group-container {
    border-radius: 15px;
    overflow: hidden;
  }

  .button {
    width: 90%;
    margin: 5px 14px;
  }

</style>