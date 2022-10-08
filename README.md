# UCSD CSSA官网

[官网入口](https://www.ucsdcssa.com)  
[后端GitHub仓库](https://github.com/TallMessiWu/ucsdcssa-website-backend)

## 项目配置

1. 使用了[Vue 3](https://cn.vuejs.org/guide/introduction.html)的组合式API，并启用了响应式语法糖。
2. 使用了[Vite](https://cn.vitejs.dev/config/)前端构建工具。
3. 在PC端使用了[Element Plus](https://element-plus.gitee.io/zh-CN/)组件库。
4. 在移动端使用了[Vant 3](https://youzan.github.io/vant/#/zh-CN)组件库。

## 代码风格

1. `JavaScript`相关代码中的变量命名应使用驼峰命名法(camelCase)。
2. 组件在`JavaScript`中引用是应使用帕斯卡命名法(PascalCase)例如`MobileHome`，组件`export`中的名称也应为同样格式。
3. 组件在页面中使用和文件名本身的命名应用短横线命名法(kebab-case)，例如`mobile-home`，以提高可读性。
4. 其他文件命名尽量使用蛇形命名法(snake_case)以提高可读性。
5. 手机相关页面与组件命名应由`mobile`开头，例如`mobile-home.vue`。
6. 详情可参考[Vue.js命名风格指南（易记）](https://zhuanlan.zhihu.com/p/371613632)
   与[史上最全 Vue 前端代码风格指南](https://zhuanlan.zhihu.com/p/437632696)。

## GitHub提交指南

1. 每次提交都应使用`gitmoji`，即一个表情加更新的内容概述。
2. 表情的挑选需要依照[gitmoji官网](https://gitmoji.dev/)。选择最符合每次提交内容的表情，例如 “:rocket:
   部署了课友群功能。”，并注意句子应以句号结尾。建议多次小量的提交代码更改，尽量避免一次更新过多代码。

## 网站更新指南

1. 首先确保更改都已经发布到`GitHub`上。
2. 打开网站的宝塔面板，在左侧侧边栏中找到“文件”页面并打开。然后打开网站目录：`/www/wwwroot/ucsdcssa-website-vue`。
3. 点击上方的终端，并在终端中运行`git pull`按回车，然后根据提示输入相关用户名与密码或口令。
4. `git`抓取成功后，在左侧侧边栏中选中“网站”页面，并在上方选中“Node项目”。
5. 找到项目`ucsdcssa_website_vue`并点击服务状态列的`||未启动`以启动项目。
6. 点击后，`Node`会构建项目并更新项目根目录下的`dist`文件夹。
7. 刷新网页，如果项目状态回到`||未启动`时，则表示更新完成。

## 常见问题

Q：照着步骤更新了，但是网站没有变化。  
A：这可能是因为根目录下的`dist`文件夹中原有的内容没有被覆盖。可以把`dist`
文件夹删除，然后从维护指南的第4步开始操作至结束。操作完成后，项目根目录中会重新出现`dist`文件夹。