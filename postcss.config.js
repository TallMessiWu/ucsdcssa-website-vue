module.exports = {
    plugins: {
        // 用来自动适配宽度
        'postcss-px-to-viewport': {
            viewportWidth: 375,
            // 只对移动端生效 http://events.jianshu.io/p/2f238655b03d
            include: [/vant/, /\/src\/views\/mobile*/, /\/src\/components\/mobile*/]
        },
    },
};