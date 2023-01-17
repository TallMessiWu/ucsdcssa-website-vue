import vue from "@vitejs/plugin-vue"
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver, VantResolver} from 'unplugin-vue-components/resolvers'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import {defineConfig} from "vite"

export default defineConfig({
    // 配置默认根路径
    base: "./",
    server: {
        host: "0.0.0.0",
        port: 666
    },
    plugins: [
        // 配置响应式语法糖
        vue({
            reactivityTransform: true
        }),
        // 配置按需引入组件和样式
        AutoImport({
            resolvers: [
                IconsResolver({
                    prefix: "Icon"
                }),
                ElementPlusResolver()
            ],
        }),
        Components({
            resolvers: [
                IconsResolver({
                    enabledCollections: ["ep"]
                }),
                ElementPlusResolver(),
                VantResolver()
            ],
        }),
        Icons({
            autoInstall: true
        })
    ]
})