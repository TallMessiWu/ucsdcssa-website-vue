import {createApp} from 'vue'
import App from './app.vue'
import './index.less'
import router from "./router/router";

const app = createApp(App)

// 挂载路由模块
app.use(router)

app.mount('#app')
