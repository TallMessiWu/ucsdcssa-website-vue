import {createApp} from 'vue'
import App from './app.vue'
import './index.less'
import {Lazyload} from "vant"
import router from "./router/router";

const app = createApp(App)

app.use(Lazyload)

// 挂载路由模块
app.use(router)

app.mount('#app')
