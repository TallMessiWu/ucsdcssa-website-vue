<template>
  <el-container>
    <el-header class="common">

      <el-row justify="space-between" align="middle">

        <!--CSSA LOGO-->
        <el-col :span="12" :offset="2">
          <el-row align="middle">
            <el-image class="logo" :src="getAssetsFile('logo-with-text.png')" fit="contain"></el-image>
          </el-row>
        </el-col>

        <el-col :span="10">
          <el-row justify="space-between" align="middle">

            <!--主页按钮-->
            <!--<el-col :span="2.5">-->
            <el-col :offset="10" :span="2.5">
              <div>
                <el-button type="plain" class="el-dropdown-link" link @click="router.replace({name: 'Home'})">主页
                </el-button>
              </div>
            </el-col>

            <!--关于CSSA按钮-->
            <!--锚点做起来太麻烦，感觉没有必要，先去掉吧-->
            <!--<el-col :span="4.5">-->
            <!--  <div>-->
            <!--    <el-button type="plain" class="el-dropdown-link" link @click="goAnchor('homeintro')">关于CSSA</el-button>-->
            <!--  </div>-->
            <!--</el-col>-->

            <!--学生服务折叠面板-->
            <el-col :span="3.5">
              <el-dropdown>
          <span class="el-dropdown-link">
            学生服务
            <el-icon class="el-icon--right">
              <arrow-down/>
            </el-icon>
          </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item>新生微信群</el-dropdown-item>
                    <el-dropdown-item>新生见面会</el-dropdown-item>
                    <el-dropdown-item>"一城一程"UCSD新生手册</el-dropdown-item>
                    <el-dropdown-item>接机服务</el-dropdown-item>
                    <el-dropdown-item>接机报名微信小程序</el-dropdown-item>
                    <el-dropdown-item>健康包发放</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </el-col>

            <!--活动折叠面板-->
            <!--  <el-col :span="3.75">-->
            <!--    <el-dropdown>-->
            <!--<span class="el-dropdown-link">-->
            <!--  活动-->
            <!--  <el-icon class="el-icon&#45;&#45;right">-->
            <!--    <arrow-down/>-->
            <!--  </el-icon>-->
            <!--</span>-->
            <!--      <template #dropdown>-->
            <!--        <el-dropdown-menu>-->
            <!--          <el-dropdown-item>活动主页</el-dropdown-item>-->
            <!--          <el-dropdown-item>开学季活动</el-dropdown-item>-->
            <!--          <el-dropdown-item>春节系列活动</el-dropdown-item>-->
            <!--          <el-dropdown-item>春季篮球赛</el-dropdown-item>-->
            <!--        </el-dropdown-menu>-->
            <!--      </template>-->
            <!--    </el-dropdown>-->
            <!--  </el-col>-->

            <!--部门折叠面板-->
            <el-col :span="4">
              <el-dropdown>
          <span class="el-dropdown-link">
            部门
            <el-icon class="el-icon--right">
              <arrow-down/>
            </el-icon>
          </span>
                <template #dropdown>
                  <el-dropdown-menu>
                    <el-dropdown-item @click="goToDepartment('PM')">PM</el-dropdown-item>
                    <el-dropdown-item @click="goToDepartment('外联部')">外联部</el-dropdown-item>
                    <el-dropdown-item @click="goToDepartment('学术部')">学术部</el-dropdown-item>
                    <el-dropdown-item @click="goToDepartment('宣传部')">宣传部</el-dropdown-item>
                    <el-dropdown-item @click="goToDepartment('文体部')">文体部</el-dropdown-item>
                    <el-dropdown-item @click="goToDepartment('开发部')">开发部</el-dropdown-item>
                    <el-dropdown-item @click="goToDepartment('人事部')">人事部</el-dropdown-item>
                    <el-dropdown-item @click="goToDepartment('新媒体部')">新媒体部</el-dropdown-item>
                  </el-dropdown-menu>
                </template>
              </el-dropdown>
            </el-col>

            <!--校内社团介绍折叠面板-->
            <!--  <el-col :span="6">-->
            <!--    <el-dropdown>-->
            <!--<span class="el-dropdown-link">-->
            <!--  校内社团介绍-->
            <!--  <el-icon class="el-icon&#45;&#45;right">-->
            <!--    <arrow-down/>-->
            <!--  </el-icon>-->
            <!--</span>-->
            <!--      <template #dropdown>-->
            <!--        <el-dropdown-menu>-->
            <!--          <el-dropdown-item>CES 中国工程学会</el-dropdown-item>-->
            <!--          <el-dropdown-item>Chinese Computer Community</el-dropdown-item>-->
            <!--          <el-dropdown-item>剧本杀&跑团社团</el-dropdown-item>-->
            <!--          <el-dropdown-item>FMO 国风音乐社团</el-dropdown-item>-->
            <!--          <el-dropdown-item>海螺心理</el-dropdown-item>-->
            <!--          <el-dropdown-item>三晤剧社</el-dropdown-item>-->
            <!--          <el-dropdown-item>CCDT 拂衣舞社</el-dropdown-item>-->
            <!--        </el-dropdown-menu>-->
            <!--      </template>-->
            <!--    </el-dropdown>-->
            <!--  </el-col>-->

          </el-row>
        </el-col>
      </el-row>
    </el-header>
  </el-container>

</template>

<script setup>
import {getAssetsFile} from "../utils/getAssetsFile";
import {ArrowDown} from '@element-plus/icons-vue';
import {useRouter} from "vue-router"

const router = useRouter();

function goToDepartment(departmentName) {
  router.push({
    name: 'Department',
    // params现在必须定义在地址里了 https://www.cnblogs.com/liao-yi/articles/17028269.html
    params: {
      departmentName
    }
  })
}

function goAnchor(id) {
  id = "#" + id;
  console.log(document.querySelector(id))
  document.querySelector(id).scrollIntoView({
    behavior: "smooth",
    block: "center",
    inline: "nearest",
  });
}
</script>

<script>
export default {
  name: "TheHeader"
}
</script>

<style scoped lang="less">
  .common {
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .logo {
    width: 15vw;
  }

  .el-dropdown-link {
    font-family: sans-serif;
    font-size: 1vw;
    white-space: nowrap;
    vertical-align: baseline;
    line-height: 2.5vw;
  }

  :deep(.el-dropdown-menu__item:not(.is-disabled):focus) {
    background-color: rgba(253, 226, 226, 255);
    color: rgba(196, 86, 86, 255);
  }

  .el-icon--right {
    margin-left: -0.15vw;
  }
</style>