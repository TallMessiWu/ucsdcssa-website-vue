<!--公众号板块组件-->
<template>
  <el-container class="article">
    <el-main>
      <!--板块标题-->
      <el-row justify="center">
        <el-image style="height:20vw" :src="img_src" fit="contain"></el-image>
<!--        {{img_src}}-->
      </el-row>
      <!--板块标题+板块标签-->
      <el-row>
        <div class="articles-content">
          <h3 style="color:darkred; font-size: 1vw">{{ title }}</h3>
          <p style="font-size: 0.8vw;">{{ type }}</p>
        </div>
      </el-row>


    </el-main>
  </el-container>
</template>

<script setup>
import {defineProps} from 'vue';

const props = defineProps({
  title: {
    type: String
  },
  type: {
    type: String
  },
  img_src: {
    type: String
  }
})

</script>

<script>
export default {
  name: "ArticleTab"
}
</script>

<style scoped lang="less">
  .article {
    width: 20vw;
    height: 30vw;
    margin-right: 2vw;
    margin-bottom: 3vw;
  }

  .articles-content {
    height: 10vw;
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