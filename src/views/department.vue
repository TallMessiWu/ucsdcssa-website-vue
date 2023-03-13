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
      // 这里必须先清空departmentData，否则如果用户先查看部门A，然后查看部门B。
      // 那么department-tab传进去的参数里会出现department-name='部门B'配上原来的members='部门A成员数据'的情况。
      // 虽然这样不会报错，因为很快在使用getDepartmentData函数后，departmentData就会被重新赋值，但是这样做不够优雅。
      // 因为后端的日志里会出现报错，而且这样做会造成不必要的网络请求。
      departmentData = {}
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