import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import router from './router/index.js'

import '../style/headtap.css'
import '../style/normalize.min.css'

const app = createApp(App)
app.use(ElementPlus, {locale: zhCn})
app.use(router)

// 请求地址
import urls from "../api/api";
app.config.globalProperties.$urls = urls
// 请求方法
import request from "../api/request";
app.config.globalProperties.$request = request
// 弹窗提示
import tips from '../config/Tips'
app.config.globalProperties.$tips = tips



app.mount('#app')
