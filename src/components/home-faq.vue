<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <h2>F. A. Q</h2>
        <p>常见问题汇总</p>
      </el-header>
      <el-main>
        <br>
        <el-collapse accordion>
          <el-collapse-item name="1" class="group">
            <template #title>
              <el-icon class="header-icon" :size="30">
                <question-filled/>
              </el-icon>
              <div>
                <h3>CSSA是盈利性质的吗？你们怎么赚钱? </h3>
              </div>
            </template>
            <div>
              <p class="text">CSSA是非营利性自发学生组织。和某些其他留学生组织不同，我们大部分经费来自活动赞助商。</p>
            </div>
          </el-collapse-item>
          <el-collapse-item name="2" class="group">
            <template #title>
              <el-icon class="header-icon" :size="30">
                <question-filled/>
              </el-icon>
              <h3>我想要加入CSSA，该如何报名呢？</h3>
            </template>
            <div>
              <p class="text">点击页面上方的部门，可以查看各部门的招新要求哦～</p>
            </div>
          </el-collapse-item>
          <el-collapse-item name="3" class="group">
            <template #title>
              <el-icon class="header-icon" :size="30">
                <question-filled/>
              </el-icon>
              <h3>为什么要加入CSSA?</h3>
            </template>
            <div>
              <p class="text">对我们来说，这里就是家。</p>
            </div>
          </el-collapse-item>
          <el-collapse-item name="4" class="group">
            <template #title>
              <el-icon class="header-icon" :size="30">
                <question-filled/>
              </el-icon>
              <h3>CSSA的新生接机服务如何报名？</h3>
            </template>
            <div>
              <p class="text">请先从这里了解我们的新生服务细节，然后可以通过CSSA接机微信小程序报名。</p>
            </div>
          </el-collapse-item>
          <el-collapse-item name="5" class="group">
            <template #title>
              <el-icon class="header-icon" :size="30">
                <question-filled/>
              </el-icon>
              <h3>我是新生，如何加入新生微信群？</h3>
            </template>
            <div>
              <p class="text">请加任意我们的小助手
                <text style="color: limegreen">微信号</text>
                ，验证身份后，她会拉你入群。
              </p>
            </div>
            <div>
              <p class="text">UCSD CSSA 小助手1 WeChat ID:
                <text style="color: cornflowerblue">UCSDCSSA</text>
              </p>
            </div>
            <div>
              <p class="text">UCSD CSSA 小助手2 WeChat ID:
                <text style="color: cornflowerblue">UCSDCSSA2</text>
              </p>
            </div>
          </el-collapse-item>
        </el-collapse>
      </el-main>
    </el-container>
  </div>
</template>

<script setup>
import {QuestionFilled} from '@element-plus/icons-vue'
</script>

<script>
export default {
  name: "HomeFaq"
}
</script>

<style scoped lang="less">
  .common-layout {
    width: 85%;
    padding: 2vw 22vw 5vw 22vw;
  }

  .el-header {
    text-align: center;
    line-height: 0.525vw;
  }

  .el-main {
    position: relative;
    top: 2vw;

  }

  h2 {
    color: #635551;
    font-family: "Poppins", sans-serif;
    font-size: 1.682vw;
    position: relative;
    top: -0.5vw;
  }

  h3 {
    position: relative;
    left: 1.051vw;
    font-family: "Open Sans", sans-serif;
  }

  .text {
    font-size: 0.841vw;
    font-family: "Open Sans", sans-serif;
    position: relative;
    left: 2.5vw;
  }

  :deep(.el-collapse-item__header) {
    color: #303313;
    background-color: transparent;
    border: none;
  }

  :deep(.el-collapse-item__wrap) {
    background-color: transparent;
  }

  :deep(.el-collapse-item) {
    background-color: white;
    border-radius: 20px;
    color: #BD5C46FF;
  }

  :deep(.el-collapse-item__header:hover) {
    color: #BD5C46FF;
  }

  :deep(.is-active) {
    color: #BD5C46FF;
  }

  .header-icon {
    position: relative;
    left: 0.7vw;
    color: #ffb9a3;
  }

  .group {
    margin-bottom: 1vw;
  }

  .text {
    margin-top: -0.2vw;
    margin-bottom: -0.2vw;
  }
</style>