<template>
  <el-container>
    <el-main>
      <el-row justify="center">
        <div class="intro-container">
          <!--部门照片-->
          <el-row class="image">
            <div class="demo-image">
              <el-image :src="`${classified.backendAddress}/group-photo/${departmentName}`" :fit="'fill'"/>
            </div>
          </el-row>
          <!--部门名称-->
          <div class="department-name">
            <el-row
                style="font-size: 2vw; font-weight: bold; margin-top: 1.042vw; margin-bottom: 1.042vw;">
              {{ departmentName }}
            </el-row>
          </div>
          <!--部门简介-->
          <div class="description">
            <el-col style="font-size: 1vw; white-space: pre-wrap">
              {{ departmentData.description }}
            </el-col>
          </div>
          <!--部门名言-->
          <div class="epigram-container">
            <img class="quote-left" src="../assets/quote-left.svg"/>
            <p class="epigram">
              {{ departmentData.epigram }}
            </p>
            <img class="quote-right" src="../assets/quote-right.svg"/>
          </div>
          <!--部门招新-->
          <div class="recruit">
            <el-col v-html="departmentData.recruit"></el-col>
          </div>
          <!--部门口号-->
          <div class="slogan">
            <p style="text-align: center; font-weight: bold; font-size: 1.333vw">
              {{ departmentData.slogan }}</p>
          </div>
        </div>
      </el-row>

    </el-main>
  </el-container>

</template>

<script setup>
import {classified} from "../classified";

const props = defineProps(["departmentName", "departmentData"])

</script>

<script>
export default {
  name: "DepartmentIntro"
}


</script>

<style scoped lang="less">

  :deep(.el-main) {
    background-color: white;
  }

  .intro-container {
    margin-top: 2vw;
    margin-bottom: 2vw;
    width: 50vw;
    box-shadow: 0vw 0.347vw 0.694vw 0vw rgba(0, 0, 0, 0.1);
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
    font-size: 1.25vw;
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
    font-size: 1vw;
  }

  .recruit-title {
    font-weight: bold;
    text-decoration-line: underline;
  }

  .slogan {
    font-size: 1.2vw;
    height: 3.472vw;
  }

</style>
