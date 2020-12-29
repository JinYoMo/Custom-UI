<template>
  <div>
    Button 示例
  </div>
  <h1>示例一</h1>
  <div>
    <!-- 默认将组件上的事件传给最外层的元素 绑定到根元素-->
    <Button @click="onClick" @focus="onClick" @mouseover="onClick">你好</Button>
  </div>
</template> 
<script lang="ts">
import Button from "../lib/Button.vue";
export default {
  components: {
    Button,
  },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>