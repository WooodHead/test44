const path = require('path')

module.exports = {
    title: 'Wenson',
    description: '一生为一次发光',
    theme: 'seeker',
    markdown: {
        lineNumbers: true,
    },
    plugins: ['@vuepress/last-updated'],
    themeConfig: {
        lastUpdated: '最近更新',
        logo: '/ws-logo-white.png',
        valine: {
            appId: 'zpYH60z3swFivRMCzdH85xHw-gzGzoHsz',
            appKey: 'eB05xKa2vXzULbAkaqR2W1EK',
        },
        footer: {
            slogan: 'poetry',
            copyright: 'Made with 💚 by Wenson',
            social: [
                {
                    type: 'qq', // qq, wechat, bilibili, github, rss, weibo
                    value: '', 
                },
                {
                    type: 'wechat', // qq, wechat, bilibili, github, rss, weibo
                    value: '', 
                },
                {
                    type: 'github', // qq, wechat, bilibili, github, rss, weibo
                    value: 'https://github.com/wensonsmith', 
                },
            ]
        },
        nav: [
            {
                text: '归档',
                link: '/archive/'
            },
            {
                text: '分类',
                link: '/categories/'
            },
            {
                text: '关于',
                link: '/about/'
            },
        ],
    },
    configureWebpack() {
        return {
            resolve: {
                alias: {
                    '@public': path.join(__dirname, './public')
                }
            }
        }
    }
}