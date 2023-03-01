<template>
  <el-container>
    <div class="header-image-container">

      <el-main class="main">

        <!--大标题-->·
        <el-row>
          <el-col :span="22" :offset="2">
            <div class="headline">公益服务，以人为本</div>
          </el-col>
        </el-row>

        <!--副标题-->
        <el-row>
          <el-col :span="22" :offset="2">
            <div class="headline-subtext">我们用爱发电，照亮您留学的路途</div>
          </el-col>
        </el-row>

        <el-row>
          <!--热门资讯按钮-->
          <el-col :span="3.5" :offset="2">
            <div class="headline-button">
              <el-button link size="large" class="headline-button-text" :icon="Right" round>近期热门资讯</el-button>
            </div>
          </el-col>
          <!--关注公众号按钮-->
          <el-col :span="3.5">
            <div class="headline-button">
              <el-button link size="large" class="headline-button-text" :icon="Right" round>关注CSSA公众号</el-button>
            </div>
          </el-col>
        </el-row>

        <!--4张卡片-->
        <el-row class="cards">
          <!--标题卡片-->
          <el-col :span="6.5" :offset="2">
            <el-card id="header-card">
              <!--标题卡片的标题-->
              <div class="card1-header">
                <text class="bold">我们是...</text>
              </div>
              <br>
              <!--标题卡片正文-->
              <div class="card1-text">
                <text class="bold">中国学生学者联合会</text>（Chinese Students and Scholars Association, 简称CSSA）
              </div>

              <br>
              <!--标题卡片正文-->
              <div class="card1-text">
                是海外中国学生、学者的全球官方组织，活跃在各大洲的高等学府
              </div>

              <br>
              <!--标题卡片正文-->
              <div class="card1-text">
                <text class="bold">UCSD-CSSA</text>作为全球CSSA大家庭中的一员，成立于1985年，旨在从学术、职业发展、生活、文娱等全方面服务UCSD华人学生、学者
              </div>
            </el-card>
          </el-col>

          <el-col :span="5">
            <!--子卡片容器-->
            <el-card class="children-card-container">
              <div class="children-card">
                <div class="icon">
                  <el-icon :size="30">
                    <Document/>
                  </el-icon>
                </div>
                <br>
                <!--子卡片标题-->
                <div class="card-header">
                  <span>校园资讯</span>
                </div>

                <br>
                <!--子卡片正文-->
                <div class="card-text">
                  选课，求职，交学费，网课签证，专业介绍，新冠检测...
                </div>
                <br>
                <!--子卡片正文-->
                <div class="card-text">
                  关注CSSA公众号让您获得第一手校内外信息
                </div>
              </div>
            </el-card>
          </el-col>


          <el-col :span="5">
            <el-card class="children-card-container">
              <div class="children-card">
                <div class="icon">
                  <el-icon :size="30">
                    <SwitchFilled/>
                  </el-icon>
                </div>
                <br>
                <!--子卡片标题-->
                <div class="card-header">
                  <span>活动组织</span>
                </div>

                <br>
                <!--子卡片正文-->
                <div class="card-text">
                  申研分享，春晚，狼人杀，德扑，桌游夜，故事汇，茶话会，篮球赛...
                </div>

                <br>
                <!--子卡片正文-->
                <div class="card-text">
                  学术生活娱乐我们全安排！
                </div>
              </div>
            </el-card>
          </el-col>

          <el-col :span="5">
            <el-card class="children-card-container">
              <div class="children-card">
                <div class="icon">
                  <el-icon :size="30">
                    <Van/>
                  </el-icon>

                </div>
                <br>
                <!--子卡片标题-->
                <div class="card-header">
                  <span>新生服务</span>
                </div>
                <br>
                <!--子卡片正文-->
                <div class="card-text">新生群，国内暑假见面会，机场接机，手机银行卡办理...
                </div>
                <br>
                <!--子卡片正文-->
                <div class="card-text">
                  初到异国他乡，CSSA与你一起共度难关，适应新环境
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-main>

      <div class="white-background"></div>
    </div>
  </el-container>


</template>

<script setup>
import {Document, Right, SwitchFilled, Van} from '@element-plus/icons-vue'</script>

<script>
export default {
  name: "HomeHeadline"
}
</script>

<style scoped lang="less">

  .header-image-container {
    background-color: white;
    background-image: url("../assets/geisel-library.jpeg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
  }

  .main {
  overflow: visible;
  }

  .headline {
    margin-top: 10vw;
    margin-left: 2vw;
    font-size: 3vw;
    color: white;
  }

  .headline-subtext {
    margin-top: 0.3vw;
    margin-left: 2vw;
    font-size: 1.5vw;
    color: white;
  }

  .headline-subtext:hover {
    color: orange;
  }

  .headline-button {
    border-radius: 2vw;
    margin-left: 3vw;
    margin-top: 2vw;
    background-color: rgb(70, 71, 74);
  }

  .headline-button-text {
    color: white;
  }

  .headline-button-text:hover {
    color: white;
  }

  .headline-button:hover {
    background-color: #982f2d;
  }

  .cards {
    position: relative;
    top: 8vw;
  }

  .el-card {
    margin-top: 5vw;
  }

  #header-card {
    margin-top: 3vw;
    width: 23vw;
    border-radius: 1vw;
    border-width: 0;
    background-color: #982f2d;
  }

  .card1-header {
    color: white;
    font-size: xx-large;
    margin: 1vw;
  }

  .bold {
    font-weight: bold;
  }

  .card1-text {
    margin: 1vw;
    color: white;
  }

  .white-background {
    height: 10vw;
    width: 100%;
    background-color: white;
  }

  .children-card-container {
    border-radius: 1vw;
    margin-left: 1.5vw;
    min-height: 20vw;
  }

  .children-card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .icon {
    color: #982f2d;
  }

  .card-header {
    font-size: x-large;
    font-weight: bold;
  }

</style>