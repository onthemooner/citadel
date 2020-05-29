module.exports = {
    title: 'Citadel',
    description: '好好学习，天天向上',
    themeConfig: {
        // displayAllHeaders: false,
        // activeHeaderLinks: true,
        nav: [
            { text: '首页', link: '/' },
            { text: '基础知识', link: '/基础知识/' },
            { text: '洪功略', link: '/洪功略/' },
            { text: '趋势围猎', link: '/趋势围猎/' },
            { text: '价值投机', link: '/价值投机/' },
        ],
        sidebar: {
            // '/basic/': [
            //     {
            //         title: '基础知识',   // 必要的
            //         path: '/basic/',      // 可选的, 应该是一个绝对路径
            //         collapsable: true, // 可选的, 默认值是 true,
            //         sidebarDepth: 1,    // 可选的, 默认值是 1
            //         children: [
            //             {
            //                 title: '基本面',
            //                 path: '/basic/基本面',
            //                 collapsable: true,
            //                 sidebarDepth: 2,
            //                 children: [
            //                     ['/basic/基本面/财务报表', '财务报表'],
            //                     ['/basic/基本面/公司概况', '公司概况'],
            //                 ],
            //             },
            //             ['/basic/交易规则', '交易规则'],
            //         ]
            //     },
            // ],
            '/基础知识/': [
                '交易规则',
                {
                    title: '基本面',
                    children: [
                        '基本面/财务报表',
                        '基本面/公司概况',
                    ],
                },
                {
                    title: 'Definitions',
                    children: [
                        'Definitions/PB',
                        'Definitions/PE',
                    ],
                },
            ],
            '/洪功略/': [
                {
                    title: '核心思维',
                    children: [
                        '核心思维/A股独特生态体系',
                        '核心思维/散户亏钱的原因',
                        '核心思维/构建专属个人的交易系统',
                    ],
                },
                {
                    title: 'H333操作策略',
                    children: [
 
                    ],
                }
            ],
            '/趋势围猎/': [
                '/趋势围猎/季节判断',
                '/趋势围猎/板块判断',
            ],
            '/价值投机/': [
                '/价值投机/盈利预测',
                '/价值投机/行业分析',
            ],
        }
    },
}