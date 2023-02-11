<template>
  <el-container class="common-layout">

    <el-footer>
      <el-row justify="center" class="first_container">
        <el-col :span="6">
          <el-row justify="space-evenly">
            <el-col :span="2"><a href="https://www.facebook.com/ucsdcssa/">
          <el-image :src="getAssetsFile('facebook-fill.png')" class="image1 circle_icon padface" >
          </el-image></a></el-col>
            <el-col :span="2"><el-image :src="getAssetsFile('wechat.png')" class="image3 circle_icon"></el-image></el-col>
       <el-col :span="2"><a href="https://www.instagram.com/ucsdcssa1985/"><el-image :src="getAssetsFile('instagram.png')" class="image2 circle_icon padinsta"></el-image></a>
       </el-col></el-row>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="3">
        <el-image :src="getAssetsFile('logo.png')" class="logo"></el-image>
        </el-col>
        <el-col :span="21" class="btm_text">
          <el-row class="texta">
            Copyright © 2023
            <span class="boldtext">&nbspUCSD CSSA&nbsp</span>
             All rights reserved.
          </el-row>
          <el-row>
          <el-link href="https://beian.miit.gov.cn/#/Integrated/index" :underline="false">苏ICP备2022038753号-1</el-link>
          </el-row>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script setup>
import {getAssetsFile} from "../utils/getAssetsFile";

import { Edit, View as IconView } from '@element-plus/icons-vue';
</script>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped lang="less">
.el-link {
  margin-right: 1vw;
  color:#982F2D;
}
.el-link .el-icon--right.el-icon {
  vertical-align: text-bottom;
}
.common-layout{
  background-color: #313338;
  padding:0vw;
  height:20vw;

}
.image2{
  padding-top: 1.6vw;
  padding-bottom:1.5vw;
  width: 2.8vw;
  height: 2.8vw;
}
.image1{
  padding-top: 1.5vw;
  padding-bottom:1.5vw;
  width: 3vw;
  height: 3vw;

}
.image3{
  padding-top: 1.8vw;
  padding-bottom:1.5vw;
  width: 1.5vw;
  height: 1.5vw;
}
.circle_icon{
  margin-top: 1vw;
  background: #8a8a8a;
  width: 2.5vw;
  height: 2.5vw;
  border-radius: 50%;
  image-align: center;
  line-height: 6vw;
  vertical-align: middle;
  padding: 0.7vw;
  transition: transform 0.3s;
}
.padface{
  padding:0.5vw;
  width: 3vw;
  height: 3vw;
}
.texta{
  color:#8a8a8a;
}
.logo{
  width:7vw;
  margin-left: 4vw;
  margin-top: -4vw;
}
.btm_text{
  padding-top:3vw;
}
.boldtext{
  font-weight:bold;
}
.image1:hover{
  width:3.5vw;
  height:3.5vw;
}
.image2:hover{
  width:3.5vw;
  height:3.5vw;
}
.image3:hover{
  width:4vw;
  height:4vw;
}
.el-link:hover{
  color:#FF7E54;
}
.first_container{
  height:7vw;
}
.circle_icon:hover{
  margin-top:0.5vw;
  margin-left:-0.5vw;
  background:#7bb32e;
  transform: scale(1.1);
}
.padface:hover{
  margin-left:-0.5vw;
  width:4vw;
  height:4vw;
  background:#3b5998;
}

.padinsta:hover{
  background: linear-gradient(
      45deg,
      yellow 0%,
      #f09433 20%,
      #e6683c 40%,
      #dc2743 60%,
      #cc2366 80%,
      #bc1888 100%
  )
}
</style>