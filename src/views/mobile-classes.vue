<template>
  <div class="container">

    <!--搜索栏-->
    <van-search v-model.trim="search" shape="round" placeholder="请输入要搜索的课名" @input="onInput"
                background="#f2f2f2"/>
    <!--搜索页面-->
    <template v-if="search">
      <div class="search-result-container">
        <van-collapse v-for="course in result" v-model="activeNames"
                      accordion>
          <van-collapse-item :title="course" :name="course">
            <van-image :src="`/images/classes-qr-codes/${course}.jpg`" alt="" lazy-load width="100%">
              <template #loading>
                <div class="loading-container">
                  <van-loading type="spinner" size="60"/>
                </div>
              </template>
            </van-image>
          </van-collapse-item>
        </van-collapse>
      </div>
    </template>

    <!--主页面-->
    <van-index-bar v-show="!search" :index-list="Object.keys(coursesGrouped)" :sticky-offset-top="70">
      <template v-for="(courses, key) in coursesGrouped">
        <van-index-anchor :index="key"/>
        <div class="group-container">
          <van-collapse v-for="course in courses" v-model="activeNames" accordion>
            <van-collapse-item :title="course" :name="course">
              <van-image :src="`/images/classes-qr-codes/${course}.jpg`" alt="" lazy-load width="100%">
                <template #loading>
                  <div class="loading-container">
                    <van-loading type="spinner" size="60"/>
                  </div>
                </template>
              </van-image>
            </van-collapse-item>
          </van-collapse>
        </div>
      </template>
    </van-index-bar>
  </div>

</template>

<script setup>
import coursesGrouped from "../assets/courses_grouped.json"

const search = $ref('')
let activeNames = $ref('')

//搜索功能
// 所有课名小写并去除空格
const courses = Object.values(coursesGrouped).reduce((prev, cur) => prev.concat(cur), [])
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

  .group-container {
    border-radius: 15px;
    overflow: hidden;
  }
</style>