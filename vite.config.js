import vue from "@vitejs/plugin-vue"
import Components from 'unplugin-vue-components/vite';
import {VantResolver} from 'unplugin-vue-components/resolvers';
import {defineConfig} from "vite";

export default defineConfig({
    // 配置默认根路径
    base: "./",
    server: {
        host: "0.0.0.0",
        port: 666
    },
    plugins: [
        vue({
            reactivityTransform: true
        }),
        Components({
            resolvers: [VantResolver()],
        }),
    ]
})