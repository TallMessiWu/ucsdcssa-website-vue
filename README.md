# UCSD CSSA Official Website

- reconstructed with Vue 3.
- [官网入口](https://www.ucsdcssa.com)

## 项目配置

1. 使用的[Vue 3](https://cn.vuejs.org/guide/introduction.html)的组合式API，并启用了响应式语法糖。
2. 使用了[Vite](https://cn.vitejs.dev/config/)前端构建工具。
3. 在PC端使用了[Element Plus](https://element-plus.gitee.io/zh-CN/)组件库。
4. 在移动端使用了[Vant 3](https://youzan.github.io/vant/#/zh-CN)组件库。

## 代码风格

1. javascript相关代码使用驼峰命名法(camelCase)。
2. 其他文件命名尽量使用短横线命名法(kebab-case)以提高可读性。

## 维护指南

### 课友群

1. 获取所有课友群图片并放到`/public/images/classes-qr-codes`里面并更换。
2. 确保图片的格式都为`专业名 课程编号.jpg`，例如`DSC 40A.jpg`。
3. 在Windows设备上运行`/public/utils`目录中的`format_JPG_to_jpg.bat`脚本文件。这一步是为了把所有大写的`.JPG`
   后缀转为小写`.jpg`的形势。
4. 运行`/public/utils`里的`get_classes_grouped_json.py`python脚本。这一步是为了更新`/src/assets`
   里的`courses_grouped.json`文件。运行脚本会自动覆盖原有文件的内容。