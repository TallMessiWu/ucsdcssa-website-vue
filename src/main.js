import {createApp} from 'vue'
import App from './app.vue'
import './index.less'
import {Lazyload} from "vant"
import router from "./router/router"
import axios from "axios"

const app = createApp(App)

axios.defaults.baseURL = "http://localhost:667"
app.provide("axios", axios)

// 使用懒加载
app.use(Lazyload)
// 挂载路由模块
app.use(router)

app.mount('#app')
