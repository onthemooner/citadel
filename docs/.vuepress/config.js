module.exports = {
    title: 'Citadel',
    description: '好好学习，天天向上',
    themeConfig: {
        nav: [
            { text: '首页123123', link: '/' },
            { text: '目录', link: '/guide/' },
            { text: '目录', link: '/guide/demo.md' },
            { text: '趋势围猎', link: '/hunt/index.md' },
            { text: '价值投机', link: '/speculate/' },
            { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            '/',
            '/guide/',
            '/hunt/',
            {
                title: 'Guide',
                collapsable: false,
                children: ['/guide/']
            }
        ]
    },
}