/**
 * createApp创建app重要的实例函数
 * createApp接受App组件并将其挂载到#app容器中
 */
import { createApp } from 'vue'  
import App from './App.vue'
import './index.css'

createApp(App).mount('#app')
