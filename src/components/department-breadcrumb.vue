<template>
  <div class="navi">
    <ul class="breadcrumb">
      <li><a href="../#/home">主页</a></li>
      <li><a :href="`../#/department/${departmentName}`">{{ departmentName }}</a></li>
    </ul>
  </div>
</template>

<script setup>

const props = defineProps(["departmentName"])

</script>

<script>
export default {
  name: "DepartmentBreadcrumb"
}
</script>

<style scoped lang="less">
  .navi {
    background-color: #f8f4f4;
    width: 100%;
    flex-direction: column;
  }

  ul.breadcrumb {
    list-style: none;
    margin-left: 8.333vw;
    padding: 1.389vw;
  }

  /* Display list items side by side */
  ul.breadcrumb li {
    display: inline;
    font-size: 0.972vw;
  }

  /* Add a slash symbol (/) before/behind each list item */
  ul.breadcrumb li + li:before {
    padding: 0.556vw;
    color: black;
    content: "/\00a0";
  }

  /* Add a color to all links inside the list */
  ul.breadcrumb li a {
    color: #993231;
    text-decoration: none;
  }

  /* Add a color on mouse-over */
  ul.breadcrumb li a:hover {
    color: #ff7e53;
  }
</style>