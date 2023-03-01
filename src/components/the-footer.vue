<template>
  <el-container class="common-layout">
    <el-footer>
      <el-row justify="center" class="first_container">

        <el-col :span="6">
          <el-row justify="space-evenly" class="icons">

            <!--Facebook image and link-->
            <el-col :span="2">
              <a href="https://www.facebook.com/ucsdcssa/">
                <el-image :src="getAssetsFile('facebook-fill.png')" class="icon icon-container facebook"></el-image>
              </a>
            </el-col>

            <!--Wechat image-->
            <el-col :span="2">
              <el-image :src="getAssetsFile('wechat.png')" class="icon icon-container wechat"></el-image>
            </el-col>

            <!--Instagram image and link-->
            <el-col :span="2">
              <a href="https://www.instagram.com/ucsdcssa1985/">
                <el-image :src="getAssetsFile('instagram.png')" class="icon icon-container instagram"></el-image>
              </a>
            </el-col>
          </el-row>
        </el-col>
      </el-row>

      <!--CSSA LOGO-->
      <el-row>
        <el-col :span="3">
          <el-image :src="getAssetsFile('logo.png')" class="logo"></el-image>
        </el-col>
        <!--Copyright-->
        <el-col :span="21" class="btm_text">
          <el-row class="texta">
            Copyright © 2023
            <span class="boldtext">&nbspUCSD CSSA&nbsp</span>
            All rights reserved.
          </el-row>
          <el-row>
            <!--网站备案信息-->
            <el-link href="https://beian.miit.gov.cn/#/Integrated/index" :underline="false">苏ICP备2022038753号-1
            </el-link>
          </el-row>
        </el-col>
      </el-row>
    </el-footer>
  </el-container>
</template>

<script setup>
import {getAssetsFile} from "../utils/getAssetsFile";</script>

<script>
export default {
  name: "TheFooter"
}
</script>

<style scoped lang="less">
  .common-layout {
    background-color: #313338;
    padding: 0;
  }

  .first_container {
    height: 7vw;
    margin-top: 1vw;
  }

  .icon {
    padding: 0.75vw;
    width: 2.5vw;
    height: 2.5vw;

    &:hover {
      width: 4vw;
      height: 4vw;
    }
  }

  .facebook:hover {
    background: #3b5998 !important;
  }

  .wechat:hover {
    background: #7bb32e;
  }

  .instagram:hover {
    background: linear-gradient(45deg, yellow 0%, #f09433 20%, #e6683c 40%, #dc2743 60%, #cc2366 80%, #bc1888 100%);
  }

  .icon-container {
    margin-top: 1vw;
    background: #8a8a8a;
    width: 2.5vw;
    height: 2.5vw;
    border-radius: 50%;
    line-height: 6vw;
    vertical-align: middle;
    padding: 0.7vw;
    transition: transform 0.3s;
  }

  .icon-container:hover {
    margin-top: 0.5vw;
    margin-left: -0.5vw;
    transform: scale(1.1);
  }

  .logo {
    width: 7vw;
    margin-left: 4vw;
    margin-top: -4vw;
  }

  .btm_text {
    padding-top: 3vw;
  }

  .texta {
    color: #8a8a8a;
  }

  .boldtext {
    font-weight: bold;
  }

  .el-link {
    margin-right: 1vw;
    color: #982F2D;
  }

  .el-link .el-icon--right.el-icon {
    vertical-align: text-bottom;
  }

  .el-link:hover {
    color: #FF7E54;
  }
</style>