<template>
  <el-container>

    <!--页眉-->
    <el-header>
      <the-header/>
    </el-header>

    <!--正文-->
    <el-main>

      <router-view/>

    </el-main>

    <!--页脚-->
    <el-footer>
      <the-footer/>
    </el-footer>

  </el-container>
</template>

<script setup>
import TheHeader from "../components/the-header.vue";
import TheFooter from "../components/the-footer.vue";</script>

<script>
export default {
  name: "Index"
}
</script>

<style scoped lang="less">
  :deep(.el-header) {
    padding: 0;
  }

  .el-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
  }

  :deep(.el-main) {
    padding: 0;
    overflow: visible;
  }

  .el-main {
    // el-header默认高度是60px，这里main要加上这个高度，否则会被header遮挡部分内容。
    margin-top: 3.153vw;
  }

  :deep(.el-footer) {
    padding: 0;
    height: 16vw;
  }

</style>