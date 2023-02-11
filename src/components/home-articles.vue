<template>
  <div class="articles">
    <el-image class="articles-img" :src="getAssetsFile('logo.png')" fit="contain"></el-image>
    <div class="articles-content">
      <h3 style="color:darkred">UCSD 2025er看过来！新生大礼包+新生群来啦！</h3>
      <p >新生必读</p>
    </div>
  </div>
</template>

<script setup>
import {getAssetsFile} from "../utils/getAssetsFile";
</script>

<script>
export default {
  name: "HomeArticles"
}
</script>

<style scoped lang="less">
.articles{
  display: flex;
  flex-direction: column;
  width: 20vw;
  height: 30vw;
  //border-radius: 5px;
  //border: 1px solid black;
}
.articles-content{
  opacity: 0.8;
  z-index: 3;
  transition: all ease-in-out 0.1s;
  background: rgb(255, 255, 255);
  padding: 15px;
  border-width: 2px;
  border-color: #c2c2c2;
  border-top-style: hidden;
  box-shadow: 0 6px 16px rgb(0 0 0 / 20%);
}

</style>