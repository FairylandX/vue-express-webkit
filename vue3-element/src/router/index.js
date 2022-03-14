import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {// 登录界面
        path:'/',
        name:'login',
        component:()=>import('@/page/login/login')
    },
    {// 主界面
        path:'/index',
        name:'index',
        component:()=>import('@/page/index/index'),
        redirect:'/userpage',
        children:[
            {// 用户列表
                path:'/userpage',
                name:'userpage',
                component:()=>import('@/page/user-page/user')
            }
        ]
    },
    {
        path: '/test',
        name: 'test',
        component:()=>import('@/page/test/test')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router