<template>
  <department-intro/>
</template>

<script setup>
import DepartmentIntro from "../components/department-intro.vue";
import {useRoute} from "vue-router";
import {watch} from "vue";

const route = useRoute()
// params现在必须定义在地址里了 https://www.cnblogs.com/liao-yi/articles/17028269.html
let departmentName = route.params.departmentName
// 监听路由带来的部门变化
watch(
    () => route.params.departmentName, (newValue, oldValue) => {
      departmentName = newValue
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