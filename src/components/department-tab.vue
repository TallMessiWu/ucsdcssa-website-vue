<template>
  <el-container class="tab">
    <el-main>
      <el-row justify="center">
        <el-image class="member-photo" :src="photoSrc"
                  fit="cover"></el-image>
      </el-row>
      <el-row>
        <div class="members-content">
          <h3 style="color:black; font-size: 1vw; text-align: center">
            {{memberName}}
          </h3>
          <p style="font-size: 0.8vw; text-align: center">
              {{position}}
          </p>
        </div>
      </el-row>
    </el-main>
  </el-container>
</template>

<script setup>
const props = defineProps({
  memberName: String,
  position: String,
  photoSrc: String
})
</script>
<script>
export default {
  name: "DepartmentTab"
}
</script>

<style scoped lang="less">
  .tab {
    width: 13.4vw;
    margin-right: 1.576vw;
    margin-bottom: 1.576vw;
  }

  .member-photo {
    width: 15vw;
    height: 16vw;

  }

  .members-content {
    height: 100%;
    width: 100%;
    opacity: 0.8;
    z-index: 3;
    transition: all ease-in-out 0.1s;
    background: white;
  padding: 1vw;
  border-width: 0.5vw;
  border-color: #c2c2c2;
  border-top-style: hidden;
  box-shadow: 0 6px 16px rgb(0 0 0 / 20%);
}
</style>


