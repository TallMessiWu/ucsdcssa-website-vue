<template>
  <department-breadcrumb :department-name="departmentName"/>
  <department-intro :department-name="departmentName" :department-data="departmentData"/>
  <department-members :department-name="departmentName" :members="departmentData['members']"/>
  <el-backtop style="color: rgba(196, 86, 86, 255); --el-backtop-hover-bg-color: rgba(253, 226, 226, 255);"/>
</template>

<script setup>
import DepartmentIntro from "../components/department-intro.vue";
import DepartmentBreadcrumb from "../components/department-breadcrumb.vue";
import DepartmentMembers from "../components/department-members.vue";
import {useRoute} from "vue-router";
import {inject, watch} from "vue";

const route = useRoute()
// params现在必须定义在地址里了 https://www.cnblogs.com/liao-yi/articles/17028269.html
let departmentName = $ref(route.params.departmentName)
let departmentData = $ref({})

const axios = inject("axios")

// 从后端获取部门数据
async function getDepartmentData(departmentName) {
  departmentData = (await axios.get(`/department/${departmentName}`)).data
}

// 监听路由带来的部门变化
watch(
    () => route.params.departmentName, (newValue, oldValue) => {
      departmentName = newValue
      getDepartmentData(departmentName)
    },
    {immediate: true}
)

</script>

<script>
export default {
  name: "department"
}
</script>

<style scoped lang="less">
</style>