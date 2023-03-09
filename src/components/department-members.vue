<template>
  <el-container>
    <el-main>
      <!-- 部门成员 -->
      <div class="section-title">
        <h2 style="font-size: 2.222vw; font-weight: bold">部门成员</h2>
        <p>{{ currentYear }} - {{ currentYear + 1 }}</p>
        <br>
      </div>
      <div class="members-container">
        <el-col>
          <el-row class="row-bg" :gutter="60">
            <el-col :span="6" v-for="(value, key, index) in members">
              <department-tab :photo-src="`${classified.backendAddress}/member/${departmentName}/${key}`"
                              :member-name="key"
                              :position="value['position']"/>
            </el-col>
          </el-row>
        </el-col>
      </div>
    </el-main>
  </el-container>

</template>

<script setup>
import {classified} from "../classified";
import DepartmentTab from "./department-tab.vue";

const props = defineProps(["departmentName", "members"])

const currentYear = (new Date()).getFullYear()

</script>

<script>
export default {
  name: "DepartmentMembers"
}
</script>

<style scoped lang="less">
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