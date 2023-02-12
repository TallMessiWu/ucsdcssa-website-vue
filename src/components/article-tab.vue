<template>
  <el-container class="article">
    <el-main>
      <el-row justify="center">
        <el-image style="height:20vw" :src="getAssetsFile('logo.png')" fit="contain"></el-image>
      </el-row>
      <el-row>
        <div class="articles-content">
          <h3 style="color:darkred; font-size: 1vw">UCSD 2025er看过来！新生大礼包+新生群来啦！</h3>
          <p style="font-size: 0.8vw;">新生必读</p>
        </div>
      </el-row>


    </el-main>
  </el-container>
</template>

<script setup>
import {getAssetsFile} from "../utils/getAssetsFile";
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
    margin-bottom: 2vw;
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