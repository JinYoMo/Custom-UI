/**
 * main.js 入口文件 js文件不做类型检查 故修改为ts文件
 * createApp创建app重要的实例函数
 * createApp接受App组件并将其挂载到#app容器中
 */
/** 
 * vue-router初始化步骤：
 * 》新建history对象
 * 》新建router对象
 * 》引入TypeScript main.ts修改引入
 * 》app.use(router)
 * 》添加<router-view> 何处展示组件
 * 》添加<router-link> 路由跳转
 */
import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import Frank from './components/Frank.vue'
import Frank2 from './components/Frank2.vue'

const history = createWebHashHistory()
const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Frank },
    { path: '/xxx', component: Frank2 }
  ]
})
const app = createApp(App)
app.use(router)
app.mount('#app')
