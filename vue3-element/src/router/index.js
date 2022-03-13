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
        component:()=>import('@/page/index/index')
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