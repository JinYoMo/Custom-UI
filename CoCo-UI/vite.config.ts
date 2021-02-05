// @ts-nocheck
import { md } from "./plugins/md";
import fs from 'fs'
import { baseParse } from '@vue/compiler-core'

export default {
  base: './',  //assets在仓库名目录下
  assetsDir: 'assets', //去掉下划线 '_assets'
  plugins: [md()],
  vueCustomBlockTransforms: {
    demo: (options) => { //组件中有demo标签时才会处理 Switch1Demo.__sourceCode为源代码
      const { code, path } = options
      const file = fs.readFileSync(path).toString()
      const parsed = baseParse(file).children.find(n => n.tag === 'demo')
      const title = parsed.children[0].content  //获取title
      const main = file.split(parsed.loc.source).join('').trim()
      return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)
        }
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim()
    }
  }
};