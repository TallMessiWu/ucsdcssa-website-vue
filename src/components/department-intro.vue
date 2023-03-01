<template>
  <el-container>
    <!--导航栏-->
    <el-header>
      <div class="navi">
        <ul class="breadcrumb">
          <li><a href="../#/home">主页</a></li>
          <li><a href="../#/department">开发部</a></li>
        </ul>
      </div>
    </el-header>
    <!--内容-->
    <el-main>
      <div class="intro-container">
        <!--部门照片-->
        <el-row class="image">
          <div class="demo-image">
            <el-image :src="getAssetsFile(data.groupPhoto)" :fit="'fill'"/>
          </div>
        </el-row>
        <!--部门名称-->
        <div class="department-name">
          <el-row
              style="font-size: 2.222vw; font-weight: bold; margin-top: 1.042vw; margin-bottom: 1.042vw;">
            {{ data.name }}
          </el-row>
        </div>
        <!--部门简介-->
        <div class="description">
          <el-col style="font-size: 1.042vw; white-space: pre-wrap">
            {{ data.intro }}
          </el-col>
        </div>
        <!--部门名言-->
        <div class="epigram-container">
          <img class="quote-left" src="../assets/quote-left.svg"/>
          <p class="epigram">
            {{ data.epigram }}
          </p>
          <img class="quote-right" src="../assets/quote-right.svg"/>
        </div>
        <!--部门招新-->
        <div class="recruit">
          <el-col v-html="data.recruit"></el-col>
        </div>
        <!--部门口号-->
        <div class="slogan">
          <p style="text-align: center; font-weight: bold; font-size: 1.333vw">
            {{ data.slogan }}</p>
        </div>
      </div>
      <div class="articles-container">
        <!--部门项目-->
        <el-col>
          <el-row class="row-bg" justify="space-evenly" :gutter="60">
            <el-col :span="8">
              <article-tab/>
            </el-col>
            <el-col :span="8">
              <article-tab/>
            </el-col>
            <el-col :span="8">
              <article-tab/>
            </el-col>
          </el-row>
          <el-row class="row-bg" justify="space-evenly" :gutter="60">
            <el-col :span="8">
              <article-tab/>
            </el-col>
            <el-col :span="8">
              <article-tab/>
            </el-col>
            <el-col :span="8">
              <article-tab/>
            </el-col>
          </el-row>
        </el-col>
      </div>
    </el-main>

    <!-- 部门成员 -->
    <div class="section-title">
      <h2 style="font-size: 2.222vw; font-weight: bold">部门成员</h2>
      <p></p>
      <p>2023 - 2024</p>
    </div>
    <div class="members-container">
      <el-col>
        <el-row class="row-bg" justify="space-evenly" :gutter="60">
          <el-col :span="6">
            <department-tab :url="membersData.imgUrl" :member-name="membersData.memberName" :position="membersData.position"/>
          </el-col>
<!--          <el-col :span="6">-->
<!--            <department-tab/>-->
<!--          </el-col>-->
<!--          <el-col :span="6">-->
<!--            <department-tab/>-->
<!--          </el-col>-->
<!--          <el-col :span="6">-->
<!--            <department-tab/>-->
<!--          </el-col>-->
        </el-row>
      </el-col>
    </div>
  </el-container>

</template>

<script setup>
import {getAssetsFile} from "../utils/getAssetsFile";
import DepartmentTab from "./department-tab.vue";

const data = {
  "id": "kaifa",
  "groupPhoto": "开发部合照.jpg",
  "name": "开发部",
  "intro": "CSSA开发部是一个聚集了资深程序员，并为CSSA提供软件的技术支持。我们的工作包括程序开发，网站搭建与维护。\n\n开发部欢迎所有对程序开发和写网页感兴趣的同学。我们不限制专业，也不强制每个人都有极强的编程实力。只要你愿意学习新技能以及与他人合作，开发部将会是你提升个人能力与积攒宝贵经验的平台。",
  "epigram": "每一次写代码都当最后一次写，然后就也不要怕出bug。3、2、1，加油！",
  "recruit": '<p><u><strong>1. 开发组</strong></u><br />\n' +
      '职责：<strong>Web开发 (front/back end)、网站/服务器维护、UI设计。</strong><br />\n' +
      '目前的项目</p>\n' +
      '\n' +
      '<ul>\n' +
      '\t<li>CSSA 主页开发：主要展示CSSA的学生活动和PM照片</li>\n' +
      '\t<li>CapeX：React web app。检索和展示学校CAPE的数据 (会Python爬虫的优先）</li>\n' +
      '</ul>\n' +
      '\n' +
      '<p>有以下技能者优先：</p>\n' +
      '\n' +
      '<ul>\n' +
      '\t<li>Flask、SpringBoot、HTML、CSS、Javascript、Vue 3、Nodejs。</li>\n' +
      '</ul>\n' +
      '\n' +
      '<p>如果你已经有网站开发经验，请在你的简历中写明作品链接; 如果你在UCSD学习过CSE相关课程或为相关专业学生，也请在简历中注明。</p>\n',

  "slogan": "加入我们，让我们一起苦练杂技，做出让我们引以为傲的作品吧！",

}
const membersData = {
  "imgUrl": '开发部-吴俊霖-部长.jpg',
  "memberName": '吴俊霖',
  "position": '尊贵的部长'
}
</script>

<script>
export default {
  name: "DepartmentIntro"
}


</script>

<style scoped lang="less">

.el-header {
  height: 4.167vw;
}

.el-row {
  margin-bottom: 1.389vw;
}

.navi {
  background-color: #f8f4f4;
  width: 100%;
  flex-direction: column;
}

ul.breadcrumb {
  list-style: none;
  margin-left: 8.333vw;
  padding: 1.389vw;
}

/* Display list items side by side */
ul.breadcrumb li {
  display: inline;
  font-size: 0.972vw;
}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li + li:before {
  padding: 0.556vw;
  color: black;
  content: "/\00a0";
}

/* Add a color to all links inside the list */
ul.breadcrumb li a {
  color: #993231;
  text-decoration: none;
}

/* Add a color on mouse-over */
ul.breadcrumb li a:hover {
  color: #ff7e53;
}

:deep(.el-main) {
  background-color: white;
  //z-index: 10;
}

.intro-container {
  margin-top: 3.472vw;
  width: 64.583vw;
  box-shadow: 0vw 0.347vw 0.694vw 0vw rgba(0, 0, 0, 0.1);
  margin-left: 9.375vw;
  padding: 1.389vw;
  background-color: white;
  color: #313030;
}

.description {
}

.epigram-container {
  height: 10.417vw;
  background-color: #fffcfc;
  margin-top: 1.389vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-family: "Open Sans";
}

.epigram-container:after {
  content: '';
  width: 0.278vw;
  height: 7.917vw;
  background: #473d3a;
  position: absolute;
  left: 0vw;
}

.quote-left {
  width: 2.778vw;
  position: absolute;
  top: 1.389vw;
  left: 1.389vw;
}

.epigram {
  justify-content: center;
  width: 52.7366vw;
  text-align: center;
  font-size: 1.597vw;
  font-weight: bold;
  font-style: italic;
}

.quote-right {
  width: 2.778vw;
  position: absolute;
  bottom: 1.389vw;
  right: 1.389vw;
}

.recruit {
  flex-direction: column;
  font-size: 1.111vw;
}

.recruit-title {
  font-weight: bold;
  text-decoration-line: underline;
}

.slogan {
  font-size: 1.389vw;
  height: 3.472vw;
}

.articles-container {
  display: flex;
  justify-content: center;
  margin: 4.375vw 9.375vw 4.375vw 9.375vw;
  color: #313030;
}

.section-title {
  text-align: center;
  color: #635551;
  font-family: sans-serif;
  margin-bottom: 1.111vw;
}

.members-container {
  display: flex;
  justify-content: center;
  width: 90%;
  margin: auto;
  color: #313030;
}

</style>
