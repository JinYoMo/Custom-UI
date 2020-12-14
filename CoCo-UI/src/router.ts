/**
 * 手机端路由切换之后关闭aside
 * 将router封装成单独的router.ts
 * 在App.vue中引入router.ts
 * router.afterEach监听到路由改变方法中改变menuVisible.value的值，即可在路由切换时将侧边栏收起(手机端)
 */
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import SwitchDemo from './components/SwitchDemo.vue'

const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc, children: [
        { path: 'switch', component: SwitchDemo }
      ]
    }
  ]
});