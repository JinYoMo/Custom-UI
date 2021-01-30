/**
 * 解决找不到模块xxx.vue
 * 原因：TypeScript只能理解.ts文件 无法理解.vue .md文件
 * 解决方法:创建xxx.d.ts 告诉TS如何理解.vue文件
 */
declare module '*.vue' {
  import { ComponentOptions } from 'vue'
  const componentOptions: ComponentOptions
  export default componentOptions
}

declare module '*.md' {
  const str: string
  export default str
}