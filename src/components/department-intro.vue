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
      <div class="container">
        <!--照片-->
        <div class="image">
          <div class="demo-image">
            <el-image :src="getAssetsFile(data.groupPhoto)" :fit="'fill'"/>
          </div>
        </div>
        <!--部门名称-->
        <div class="department-name">
          <el-row
              style="font-size: 2.222vw; font-weight: bold; margin-top: 1.042vw; margin-bottom: 1.042vw;">
            {{ data.name }}
          </el-row>
        </div>
        <!--部门简介-->
        <div class="description">
          <el-row style="font-size: 1.042vw; white-space: pre-wrap">
            {{data.intro}}
          </el-row>
        </div>
        <!--部门名言-->
        <div class="epigram-container">
          <div class="epigram">
            <img class="quote-left" src="../assets/quote-left.svg"/>
            {{ data.epigram }}
            <img class="quote-right" src="../assets/quote-right.svg"/>
          </div>
        </div>
        <!--部门招新-->
        <div class="recruit">
          <div v-html="data.recruit"></div>
        </div>
        <div class="slogan">
          <p style="text-align: center; font-weight: bold; font-size: 1.333vw">
            {{data.slogan}}</p>
        </div>
      </div>
    </el-main>

  </el-container>

</template>

<script setup>
import {getAssetsFile} from "../utils/getAssetsFile";

const data = {
  "id": "kaifa",
  "groupPhoto": "全体合照.jpeg",
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

</script>

<script>
export default {
  name: "DepartmentIntro"
}


</script>

<style scoped lang="less">

.el-header{
  height: 4.167vw;
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
  z-index: 10;
}

.container {
  margin-top: 3.472vw;
  width: 64.583vw;
  box-shadow: 0vw 0.347vw 0.694vw 0vw rgba(0, 0, 0, 0.1);
  margin-left: 9.375vw;
  padding: 1.389vw;
  background-color: white;
}

.description {
}

.epigram-container {
  height: 10.417vw;
  background-color: whitesmoke;
  margin-top: 1.389vw;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.epigram-container:after {
  content: '';
  width: 0.278vw;
  height: 7.917vw;
  background: #473d3a;
  position: absolute;
  left: 0vw;
}

.epigram {
  font-style: italic;
  font-size: 1.333vw;
}

.quote-left {
  width: 2.778vw;
  position: absolute;
  top: 1.389vw;
  left: 1.389vw;
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
  font-size: larger;
  height: 3.472vw;
}

ul {
  font-size: 1.111vw;
}

li {
  font-size: 1.111vw;
}

p {
  font-size: 1.111vw;
}
</style>