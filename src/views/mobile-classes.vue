<template>
  <div class="container">

    <van-search v-model="search" shape="round" placeholder="请输入搜索关键词" background="#f2f2f2"/>
    <van-index-bar :index-list="Object.keys(coursesGrouped)">
      <template v-for="(courses, key) in coursesGrouped">
        <van-index-anchor :index="key"/>
        <div class="group-container">
          <van-collapse v-for="course in courses" v-model="activeNames" accordion>
            <van-collapse-item :title="course[0]" :name="course[0]">
              <van-image :src="course[1]" alt="" lazy-load>
                <template #loading>
                  <van-loading type="spinner" size="20"/>
                </template>
                <template #error>加载失败</template>
              </van-image>
            </van-collapse-item>
          </van-collapse>
        </div>
      </template>
    </van-index-bar>
  </div>

</template>

<script setup>

const courses = []
Object.keys(import.meta.glob("../assets/classes-qr-codes/*")).sort().forEach(x => {
  // 后面是vite的静态资源解析 https://cn.vitejs.dev/guide/assets.html#new-url-url-import-meta-url
  courses.push([x.match(/[^\/.]+/ig)[2], new URL(x, import.meta.url).href])
})
const coursesGrouped = $ref({})
courses.forEach(x => {
  let initial = x[0][0]
  if (initial in coursesGrouped) {
    coursesGrouped[initial].push(x)
  } else {
    coursesGrouped[initial] = [x]
  }
})

const search = $ref('')
const activeNames = $ref('')

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

  .van-search {
    padding: 0;
  }

  .group-container {
    border-radius: 15px;
    overflow: hidden;
  }

  :deep(.van-collapse-item__title .van-icon-arrow:before) {
    margin-right: 20px;
  }
</style>