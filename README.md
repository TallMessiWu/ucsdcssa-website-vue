# UCSD CSSA官网前端

[官网入口](https://www.ucsdcssa.com/)

[API入口](https://api.ucsdcssa.com/)

[前端GitHub仓库](https://github.com/TallMessiWu/ucsdcssa-website-vue)

[后端GitHub仓库](https://github.com/TallMessiWu/ucsdcssa-website-backend)

此项目PC端的网页设计参考了[旧的UCSD CSSA官网](https://github.com/TallMessiWu/CSSA_Official_Website)
。但仅仅是样式设计参考了原来的模板，代码基本上都是全部重写。只有部分CSS样式可能复制了旧版的代码。此次重构的目的是为了提高代码的可读性与可维护性，
以及提高网站的性能。同时实现前后端分离与网站模块化，以便于后续的功能扩展与前后端同步开发。

## 目录

- [项目配置](#项目配置)

- [代码风格](#代码风格)

- [项目运行要求](#项目运行要求)

- [GitHub提交指南](#GitHub提交指南)

- [网站更新指南](#网站更新指南)

- [常见问题](#常见问题)

- [项目贡献名单](#项目贡献名单)

## 项目配置

1. 使用了[Vue 3](https://cn.vuejs.org/guide/introduction.html)的组合式API，并启用了响应式语法糖。
2. 使用了[Vite](https://cn.vitejs.dev/config/)前端构建工具。
3. 在PC端使用了[Element Plus](https://element-plus.gitee.io/zh-CN/)组件库。
4. 在移动端使用了[Vant 3](https://youzan.github.io/vant/#/zh-CN)组件库。

## 代码风格

1. `JavaScript`相关代码中的变量命名应使用驼峰命名法(`camelCase`)。
2. 组件在`JavaScript`中引用是应使用帕斯卡命名法(`PascalCase`)。例如`MobileHome`，组件`export`中的名称也应为同样格式。
3. 组件在页面中使用和文件名本身的命名应用短横线命名法(`kebab-case`)，例如`mobile-home`，以提高可读性。
4. 其他文件命名尽量使用蛇形命名法(`snake_case`)以提高可读性。
5. 手机相关页面与组件命名应由`mobile`开头，例如`mobile-home.vue`。
6. 详情可参考[Vue.js命名风格指南（易记）](https://zhuanlan.zhihu.com/p/371613632)
   与[史上最全 Vue 前端代码风格指南](https://zhuanlan.zhihu.com/p/437632696)。
7. 在`HTML`、`CSS`和`Less`代码里，除个别属性如`border-radius`可以使用`px`外，其他尺寸单位都应尽可能使用`vw`作为单位。
8. `.vue`文件中的`style`部分应尽量使用`Less`语法编写，以提高可读性。

## 项目运行要求

在克隆项目后，需要在项目`src`目录下新建`classified.js`文件，内容如下：

```js
export const classified = {
   backendAddress: "更换为后端地址，例如如果在本地跑，就写'http://127.0.0.1:{flask服务端口号}'。如果在服务器跑就写'https://api.ucsd.com'。"
}
```

然后需要在项目根目录下运行`npm install`安装依赖。

使用`npm run dev`启动项目。

可以使用`npm run build`打包构建项目。打包后的文件在`dist`目录下。

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

## 项目贡献名单

因为有些同学代码是和其搭档一起完成的，所以GitHub提交记录中可能看不到他们的贡献。因此，这里列出了所有参与项目的同学，以及他们的贡献。

排序是按照页面设计时，页面与页面板块出现的先后顺序排列的。

- 例如主页先于部门页面设计，因此主页的贡献者排在了部门页面的贡献者前面。
- 同时因为主页页眉板块出现在头图板块的上方，因此主页页眉板块的贡献者排在了头图板块的贡献者前面。

如果两人共同参与了一个板块的设计，那么项目贡献者表格中会按照姓名字母顺序排列。

| 姓名  |           个人邮箱           |      UCSD邮箱      |                                                                               项目贡献                                                                               |
|:---:|:------------------------:|:----------------:|:----------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| 吴俊霖 |  junlin-wu@foxmail.com   | juw029@ucsd.edu  | 项目搭建者，同时制定了项目规范。构建了项目以及确认了项目所使用的依赖包等。设计了路由路径。负责了PC端的页面框架搭建。同时也负责整合其他人的代码，修改bug、调整样式与代码风格等。还负责了手机端页面搭建、设计与实现。同时通过实现了前端动态获取后端数据，从而将前端与后端结合到了一起。具体贡献可查询GitHub提交历史。  |
| 舒欣  |  vickyshuaaa@gmail.com   |  x1shu@ucsd.edu  |                                                     负责了PC端页眉板块(`the-header.vue`)的`HTML`、样式与部分`JavaScript`代码。                                                     |
| 陈嵲淏 |  leochen5206@icloud.com  | nichen@ucsd.edu  |                                                  负责了PC端主页头图板块(`home-headline.vue`)的`HTML`、样式与部分`JavaScript`代码。                                                   |
| 陈子轩 |  jasonc011125@gmail.com  | Zic022@ucsd.edu  |                                                  负责了PC端主页头图板块(`home-headline.vue`)的`HTML`、样式与部分`JavaScript`代码。                                                   |
| 蒋澜  |  irenanjiang@gmail.com   | l3jiang@ucsd.edu |                                                   负责了PC端主页社团介绍板块(`home-intro.vue`)的`HTML`、样式与部分`JavaScript`代码。                                                   |
| 鈕臻真 | katherinenyeu@gmail.com  |  cniu@ucsd.edu   |                                                   负责了PC端主页社团介绍板块(`home-intro.vue`)的`HTML`、样式与部分`JavaScript`代码。                                                   |
| 李昱增 |  ellison0930@gmail.com   | yul054@ucsd.edu  |                                      负责了PC端主页文章板块(`home-articles.vue`与`home-article-tab.vue`)部分的`HTML`、样式与部分`JavaScript`代码。                                      |
| 吴不为 |  yrnemesiswu@gmail.com   |  buwu@ucsd.edu   |                                      负责了PC端主页文章板块(`home-articles.vue`与`home-article-tab.vue`)部分的`HTML`、样式与部分`JavaScript`代码。                                      |
| 谷悦萌 |  yuemenggu07@gmail.com   | yug027@ucsd.edu  |                                                     负责了PC端主页问答板块(`home-faq.vue`)的`HTML`、样式与部分`JavaScript`代码。                                                     |
| 舒畅  |   changs0604@gmail.com   |  c1shu@ucsd.edu  |                                                     负责了PC端页尾板块(`the-footer.vue`)的`HTML`、样式与部分`JavaScript`代码。                                                     |
| 曾亦嘉 |   yiji4zeng@gmail.com    | y2zeng@ucsd.edu  |                                                     负责了PC端页尾板块(`the-footer.vue`)的`HTML`、样式与部分`JavaScript`代码。                                                     |
| 陈佳钰 | smallshrimp233@gmail.com | jic034@ucsd.edu  | 负责了PC端部门页面的面包屑导航板块(`department-breadcrumb.vue`)、部门介绍板块(`department-intro.vue`)和部门成员板块(`department-members.vue`与`department-tab.vue`)的`HTML`、样式与部分`JavaScript`代码。 |
| 王晓玥 |  moanawangdp@gmail.com   | xiw027@ucsd.edu  | 负责了PC端部门页面的面包屑导航板块(`department-breadcrumb.vue`)、部门介绍板块(`department-intro.vue`)和部门成员板块(`department-members.vue`与`department-tab.vue`)的`HTML`、样式与部分`JavaScript`代码。 |
