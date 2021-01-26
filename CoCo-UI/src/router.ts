/**
 * 手机端路由切换之后关闭aside
 * 将router封装成单独的router.ts
 * 在App.vue中引入router.ts
 * router.afterEach监听到路由改变方法中改变menuVisible.value的值，即可在路由切换时将侧边栏收起(手机端)
 */
import { createWebHashHistory, createRouter } from 'vue-router'
import Home from './views/Home.vue'
import Doc from './views/Doc.vue'
import DocDemo from './components/DocDemo.vue'
import SwitchDemo from './components/SwitchDemo.vue'
import ButtonDemo from './components/ButtonDemo.vue'
import DialogDemo from './components/DialogDemo.vue'
import TabsDemo from './components/TabsDemo.vue'

import { h } from 'vue';
import Markdown from './components/Markdown.vue';
const md = filename => h(Markdown, { path: `../markdown/${filename}.md`, key: filename })  //key值用于路由切换不刷新有效 vue中的h函数 参数是组件及组件的属性

const history = createWebHashHistory()
export const router = createRouter({
  history: history,
  routes: [
    { path: '/', component: Home },
    {
      path: '/doc', component: Doc,
      children: [
        { path: '', component: DocDemo },
        { path: "intro", component: md('intro') },
        { path: "get-started", component: md('get-started') },
        { path: "install", component: md('install') },
        { path: 'switch', component: SwitchDemo },
        { path: 'button', component: ButtonDemo },
        { path: 'dialog', component: DialogDemo },
        { path: 'tabs', component: TabsDemo }
      ]
    }
  ]
});