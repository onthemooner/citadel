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
            { text: '价值投资', link: '/价值投资/' },
            { text: '趋势围猎', link: '/趋势围猎/' },
            { text: '游资心得', link: '/游资心得/' },
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
                {
                    title: '公司资料',
                    children: [
                        '公司资料/一句话介绍',
                        '公司资料/主营业务',
                        '公司资料/高管',
                    ],
                },
                {
                    title: '盈利预测',
                    children: [
                        '盈利预测/业绩预测',
                        '盈利预测/研报评级',
                    ],
                },
                {
                    title: '交易',
                    children: [
                        '交易/成交原则',
                    ],
                },
                {
                    title: '指标',
                    children: [
                        '指标/成交量',
                        '指标/MACD',
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
                        '核心思维/极端交易',
                    ],
                },
                {
                    title: '选时',
                    children: [
                        '选时/股市温度体系',
                        '选时/投资四季说',
                    ],
                },
                {
                    title: 'H333操作策略',
                    children: [
                        'H333操作策略/H333',
                        'H333操作策略/SH333',
                        'H333操作策略/H110',
                        'H333操作策略/H007',
                    ],
                },
                {
                    title: '应用',
                    children: [
                        '应用/应用流程',
                    ],
                }
            ],
            '/趋势围猎/': [
                '/趋势围猎/季节判断',
                '/趋势围猎/板块判断',
            ],
            '/价值投资/': [
                '/价值投资/盈利预测',
                '/价值投资/行业分析',
            ],
            '/游资心得/': [
                {
                    title: '炒股养家',
                },
            ],
        }
    },
}