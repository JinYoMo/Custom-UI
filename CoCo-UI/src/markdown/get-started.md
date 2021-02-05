# 开始使用
请先<font color='#009fad'>安装</font>(#/doc/install)本组件库。

然后在你的代码中写入下面的代码

```
import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "coco-ui-1"
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import {Button, Tabs, Tab, Switch, Dialog, openDialog} from "coco-ui-1"
export default {
  components: {Button}
}
</script>
```