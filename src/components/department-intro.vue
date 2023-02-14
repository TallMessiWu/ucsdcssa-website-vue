<template>
  <el-container>
    <el-header>
      <div class="navi">
        <ul class="breadcrumb">
          <li><a href="../#/home">主页</a></li>
          <li><a href="../#/department">开发部</a></li>
        </ul>
      </div>
    </el-header>
    <el-main>
      <div class="container">
        <div class="image">
          <div class="demo-image">
            <el-image :src="getAssetsFile(data.groupPhoto)" :fit="'fill'"/>
          </div>
        </div>
        <div class="department-name">
          <el-row
              style="font-size: xx-large; font-weight: bold; margin-top: 15px; margin-bottom: 15px;">
            {{ data.name }}
          </el-row>
        </div>
        <div class="description">
          <el-row style="font-size: 15px; white-space: pre-wrap">{{
              data.intro
            }}
          </el-row>
        </div>
        <div class="epigram-container">
          <div class="epigram">
            <blockquote>
              <i class="icofont-quote-left quote-left">""""</i>
              <p>
                {{ data.epigram }}
              </p>
              <i class="las la-quote-right quote-right"></i>
              <i class="icofont-quote-right quote-right"></i>
            </blockquote>
          </div>
        </div>
        <div class="recruit">
          <div v-html="data.recruit"></div>
        </div>
        <div class="slogan">
          <p style="text-align: center; font-weight: bold; font-size: 19.2px">{{
              data.slogan
            }}</p>
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

.navi {
  background-color: #f8f4f4;
  height: 4.167vw;
  width: 100%;
  flex-direction: column;

}

ul.breadcrumb {
  list-style: none;
  margin-left: 120px;
  padding: 20px;
}

/* Display list items side by side */
ul.breadcrumb li {
  display: inline;
  font-size: 14px;
}

/* Add a slash symbol (/) before/behind each list item */
ul.breadcrumb li + li:before {
  padding: 8px;
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

//
:deep(.el-main) {
  background-color: white;
  z-index: 10;
}


.container {
  margin-top: 50px;
  width: 930px;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.1);
  margin-left: 135px;
  padding: 20px;
  background-color: white;
}

.description {
}

.epigram-container {
  height: 100px;
  background-color: whitesmoke;
  margin-top: 20px;
}

.epigram {
  font-style: italic;
  font-size: larger;
  font-family: "Lucida Console";
  justify-content: center;
  margin-left: 30px;
  border-left-width: 10px;

}

.recruit {
  flex-direction: column;
}

.recruit-title {
  font-weight: bold;
  text-decoration-line: underline;
}

.slogan {
  font-size: larger;
  height: 50px;
}
ul{

}
li{

}
p{

}
</style>