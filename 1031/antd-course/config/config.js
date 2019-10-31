/*
 * @Description: 配置文件
 * @Author: Do not edit
 * @Date: 2019-10-31 10:13:30
 * @LastEditTime: 2019-10-31 15:25:26
 * @LastEditors: winki
 */
export default{
    
    plugins:[
        ['umi-plugin-react',{
            antd:true,
            dva:true,
        }],
    ],
    routes:[{
            path:'/',
            component:'../layout',
            routes:[
                {
                    path:'/',
                    component:'./HelloWorld',
                },
    /*             {
                    path:'./dashboard',
                    routes:[
                        {path:'dashboard/analysis',component:'Dashboard/Analysis'},
                        {path:'dashboard/monitor',component:'Dashboard/Monitor'},
                        {path:'dashboard/workplace',component:'Dashboard/Workplace'},
                    ]
                } */
            ],
        },

    ],
    
    singular:true,
}