/*
 * @Description: 配置文件
 * @Author: Do not edit
 * @Date: 2019-10-31 10:13:30
 * @LastEditTime: 2019-10-31 16:28:38
 * @LastEditors: winki
 */
export default{
    
    plugins:[
        ['umi-plugin-react',{
            antd:true,
            dva:true,
        }],
    ],
    // 配置路径
    routes:[{
            path:'/',
            component:'../layout',//外层加上布局
            /* 内层路由 */
            routes:[
                { path: 'puzzlecards', component: './puzzlecards' },

            ],
        },

    ],
    singular:true,
}