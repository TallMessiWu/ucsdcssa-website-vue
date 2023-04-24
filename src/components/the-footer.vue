<template>
  <el-container class="common-layout">
    <el-footer>
<!--      <el-row justify="center" class="first_container">-->

<!--        <el-col :span="6">-->
<!--          <el-row justify="space-evenly" class="icons">-->

<!--            &lt;!&ndash;Facebook image and link&ndash;&gt;-->
<!--            <el-col :span="2">-->
<!--              <a href="https://www.facebook.com/ucsdcssa/">-->
<!--                <el-image :src="getAssetsFile('facebook-fill.png')" class="icon icon-container facebook"></el-image>-->
<!--              </a>-->
<!--            </el-col>-->

<!--            &lt;!&ndash;Wechat image&ndash;&gt;-->
<!--            <el-col :span="2">-->
<!--              &lt;!&ndash;这里要打开的图片需要放到public文件夹下。&ndash;&gt;-->
<!--              <a href="/公众号海报.jpg" target="_blank">-->
<!--                <el-image :src="getAssetsFile('wechat.png')" class="icon icon-container wechat"></el-image>-->
      <!--              </a>-->
<!--            </el-col>-->

<!--            &lt;!&ndash;Instagram image and link&ndash;&gt;-->
<!--            <el-col :span="2">-->
<!--              <a href="https://www.instagram.com/ucsdcssa1985/">-->
<!--                <el-image :src="getAssetsFile('instagram.png')" class="icon icon-container instagram"></el-image>-->
<!--              </a>-->
<!--            </el-col>-->
<!--          </el-row>-->
<!--        </el-col>-->
<!--      </el-row>-->

<!--      &lt;!&ndash;CSSA LOGO&ndash;&gt;-->
<!--      <el-row>-->
<!--        <el-col :span="3">-->
<!--          <el-image :src="getAssetsFile('logo.png')" class="logo"></el-image>-->
<!--        </el-col>-->
<!--        &lt;!&ndash;Copyright&ndash;&gt;-->
<!--        <el-col :span="21" class="btm_text">-->
<!--          <el-row class="texta">-->
<!--            Copyright © 2023-->
<!--            <span class="boldtext">&nbspUCSD CSSA&nbsp</span>-->
<!--            All rights reserved.-->
<!--          </el-row>-->
<!--          <el-row>-->
<!--            &lt;!&ndash;网站备案信息&ndash;&gt;-->
<!--            <el-link href="https://beian.miit.gov.cn/#/Integrated/index" :underline="false">苏ICP备2022038753号-1-->
<!--            </el-link>-->
<!--          </el-row>-->
<!--        </el-col>-->
<!--      </el-row>-->

      <el-row>
        <el-col :span="12"><div class="iconsss" />
          <el-row justify="center" class="follow">Follow US</el-row>
          <el-row justify="center">
            <el-col :span="2" class="icon1">
              <a href="https://www.facebook.com/ucsdcssa/">
                <el-image :src="getAssetsFile('facebook-fill.png')" class="icon icon-container facebook"></el-image>
              </a>
            </el-col>

            <!--Wechat image-->
            <el-col :span="2" class="icon1">
              <!--这里要打开的图片需要放到public文件夹下。-->
              <a href="/公众号海报.jpg" target="_blank">
                <el-image :src="getAssetsFile('wechat.png')" class="icon icon-container wechat"></el-image>
              </a>
            </el-col>

            <!--Instagram image and link-->
            <el-col :span="2" class="icon1">
              <a href="https://www.instagram.com/ucsdcssa1985/">
                <el-image :src="getAssetsFile('instagram.png')" class="icon icon-container instagram"></el-image>
              </a>
            </el-col>
              <!--     email       -->

            <el-col :span="2" class="icon1">
              <el-popover placement="right"
                  :width="300"
                  popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
              >
                <template #reference>
                  <el-image :src="getAssetsFile('gmail.jpg')" class="icon icon-container gmail"/>
                </template>
                <template #default>
                  <div
                      class="demo-rich-conent"
                      style="display: flex; gap: 16px; flex-direction: column"
                  >

                    <p class="cssaemail" style="margin: 0">
                      cssa@gmail.com
                    </p>
                  </div>
                </template>
              </el-popover>
            </el-col>
          </el-row>
<!--    new row of contact    -->
          <el-row justify="center">
            <el-col :span="2" class="icon2">
              <a href="https://www.facebook.com/ucsdcssa/">
                <el-image :src="getAssetsFile('youtube.jpg')" class="icon icon-container youtube"></el-image>
              </a>
            </el-col>

            <!--Wechat image-->
            <el-col :span="2" class="icon2">
              <!--这里要打开的图片需要放到public文件夹下。-->
                <el-image :src="getAssetsFile('red.jpg')" class="icon icon-container red" :fit="'contain'"></el-image>
            </el-col>

            <!--Instagram image and link-->
            <el-col :span="2" class="icon2">
              <a href="https://www.instagram.com/ucsdcssa1985/">
                <el-image :src="getAssetsFile('bilibili.jpg')" class="icon icon-container bilibili" :fit="'contain'"></el-image>
              </a>
            </el-col>
            <!--     email       -->
            <el-col :span="2" class="icon2">
              <a href="https://www.instagram.com/ucsdcssa1985/">
                <el-image :src="getAssetsFile('tiktok.jpg')" class="icon icon-container tiktok" :fit="'contain'"></el-image>
              </a>
            </el-col>

          </el-row>




<!--          <el-row justify="center">jjjjj</el-row>-->

<!--          CSSA LOGO-->
          <el-row justify="center" class="copy">
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

        </el-col>


        <el-col :span="12"><div class="iconsss" />

          <el-row justify="center" class="follow">Contact US</el-row>
          <el-row justify="center">
            <form action="https://formsubmit.co/cniu@ucsd.edu" method="POST">
              <input type="text" name="name" required>
              <input type="email" name="email" required>
              <button type="submit">Send</button>
            </form>
          </el-row>
          <el-row justify="center">yo</el-row>
          <el-row justify="center">jjjjj</el-row>
          <el-row justify="center">lol</el-row>
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
    height: 23vw;
    background-color: #313338;
    padding: 0;
  }

  .first_container {
    height: 8vw;
    margin-top: 1vw;
  }

  .el-row{
    margin-top: 15px;
    margin-bottom: 10px;
    border-color: #bc1888;
  }

  .follow{
    color: lightgrey;
    font-weight: bold;
    font-size: x-large;
    //margin-top: 20px;
    //margin-bottom: 10px;
  }

  .copy{
    margin-left: 250px;
    //margin-top: 25px;
  }

  .icon {
    padding: 0.75vw;
    width: 2.5vw;
    height: 2.5vw;
  }
  .red{
    width:4vw;
    height:1vw;

  }

  //
  .youtube:hover{
    background: #ff0000 !important;
  }
  .gmail:hover{
    background: #d44638;
  }
  .bilibili:hover{
    background: #2596be;
  }
  .red:hover{
    background: #fb2544;
  }
  .facebook:hover {
    background: #3b5998 !important;
  }
  .tiktok:hover {
    background: #000000 !important;
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
    border-radius: 45%;
    line-height: 6vw;
    vertical-align: middle;
    padding: 0.7vw;
    transition: transform 0.3s;
  }

  .icon1{
    margin-left: 0.5vw;
  }

  .icon2{
    margin-left: 0.5vw;
    margin-top: -1.2vw;
  }
  //
  //.icon-container:hover {
  //  margin-top: 0.5vw;
  //  margin-left: -0.5vw;
  //  transform: scale(1.1);
  //}
  //
  .logo {
    width: 4vw;
    //margin-left: 4vw;
    //margin-top: -4vw;
  }
  //
  //.btm_text {
  //  padding-top: 3vw;
  //}
  //
  .texta {
    color: lightgrey;
  }

  .input{
    width: 10vw;

  }
  //
  //.boldtext {
  //  font-weight: bold;
  //}
  //
  //.el-link {
  //  margin-right: 1vw;
  //  color: #982F2D;
  //}
  //
  //.el-link .el-icon--right.el-icon {
  //  vertical-align: text-bottom;
  //}
  //
  //.el-link:hover {
  //  color: #FF7E54;
  //}
</style>