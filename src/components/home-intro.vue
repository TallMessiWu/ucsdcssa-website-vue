<template>

  <el-dialog v-model="dialogVisible" title="CSSA宣传片" width="80%" >
    <iframe src="//player.bilibili.com/player.html?aid=906602710&bvid=BV19M4y1D7Dt&cid=1001206853&page=1"
             border="0" framespacing="0" allowfullscreen="true" width="1150" height="620">
    </iframe>
  </el-dialog>

  <div class="common-layout">
    <el-container class="container">
            <div class="aside">
      <el-aside width="500px">
        <el-row>
          <el-col :span="24">
            <div class="grid-content ep-bg-purple-dark"/>
            <el-image style="width: 500px; height: 700px" :src="getAssetsFile('全体合照.jpeg')" fit="cover"></el-image>
            <div class="video">
              <el-button color="#a0342c" bg :icon="CaretRight" size="large" circle @click="dialogVisible=true"/>
            </div>

          </el-col>
        </el-row>
      </el-aside>
            </div>


      <el-container>
        <el-header height="180px">
          <h1>什么是CSSA？</h1>
          <h2>非政治、非宗教、非盈利的自治学生学者团体</h2>

          <el-row>
            <el-col :span="22">
              <div class="grid-content ep-bg-purple-dark"/>
              <p>
                CSSA是中国学生、学者与中国驻美大使馆沟通的桥梁。积极维护中国学生、学者在海外的合法权益。CSSA没有会员制，所有UCSD的华人学生、学者，都是CSSA的服务的对向</p>
            </el-col>
          </el-row>
        </el-header>
        <el-main>
          <el-row>
            <el-col :span="5" class="col1">
              <div class="grid-content ep-bg-purple"/>
              <el-button color="#B02B3B" :icon="ArrowRightBold" size="large" circle plain class="list"/>
            </el-col>
            <el-col :span="12">
              <div class="grid-content ep-bg-purple-light"/>
              <h1>我们致力于</h1>
              <p class="text">团结和服务中国学生学者；丰富中国学生学者的社交、学术、职业体验；促进中美文化交流与了解</p>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="5">
              <div class="grid-content ep-bg-purple"/>
              <el-button color="#B02B3B" :icon="ArrowRightBold" size="large" circle plain class="list"/>
            </el-col>
            <el-col :span="12">
              <div class="grid-content ep-bg-purple-light"/>
              <h1>我们的价值观</h1>
              <p class="text">服务中国学生、学者是CSSA的立会之本。UCSD中国学生、学者的集体利益应永远高于CSSA的社团利益。“满足UCSD中国学生、学者的实际需求，使学生、学者受益”
                应是CSSA每一个行动的根本目的</p>
            </el-col>
          </el-row>

          <el-row justify="start">
            <el-col :span="5">
              <div class="grid-content ep-bg-purple"/>
              <el-button color="#B02B3B" :icon="ArrowRightBold" size="large" circle plain class="list"/>
            </el-col>
            <el-col :span="12">
              <div class="grid-content ep-bg-purple-light"/>
              <h1>我们希望</h1>
              <p class="text">
                CSSA的成员作为中国学生、学者，也是CSSA服务的对象。CSSA希望自己的成员在CSSA找到家的温暖，通过CSSA结实志同道合的朋友，并通过“服务CSSA”的过程，锻炼自身的团队合作能力、领导能力，和其他技能</p>
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import {ArrowRightBold, CaretRight} from '@element-plus/icons-vue'
import {getAssetsFile} from "../utils/getAssetsFile";

const dialogVisible = $ref(false);
</script>

<script>
export default {
  name: "HomeIntro"
}
</script>

<style scoped lang="less">
h1 {
  height: 15px;
  font-size: 18px;
}

h2 {
  height: 10px;
  color: #4e4b42;
  font-size: 28px;
}

p {
  margin-bottom: 40px;
  color: #3d3f41;
}

.text {
  width: 430px;
  font-size: 14px;
}


.container {
  position: relative;
  left: 25%;
}

.video {
  position: relative;
  top: -50%;
  left: 100%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

.list {
  position: relative;
  top: 35%;
  left: 30%;
}

.el-main {
  width: 650px;
}

.el-header {
  width: 650px;
}

.common-layout{
  font-family: sans-serif;
}

</style>