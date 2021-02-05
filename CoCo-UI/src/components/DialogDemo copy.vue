<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <!-- 两种方式相同 <Dialog :visible="x" @update:visible="x=$event"></Dialog> -->
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2">
    <template v-slot:content>
      <strong>hi</strong>
      <div>hi2</div>
    </template>
    <template v-slot:title>
      <strong>加粗的标题</strong>
    </template>
  </Dialog>
  <h1>示例1</h1>
  <Button @click="showDialog">show</Button>
</template> 

<script lang="ts">
import { Button, Dialog } from "../lib/index";
import { ref } from "vue";
import { openDialog } from "../lib/openDialog";
export default {
  components: {
    Dialog,
    Button,
  },
  setup() {
    const x = ref(false);
    const toggle = () => {
      x.value = !x.value;
    };
    const f1 = () => {
      return false;
    };
    const f2 = () => {};
    const showDialog = () => {
      openDialog({
        title: "标题",
        content: "你好",
        closeOnClickOverlay: false,
        //ok cancel 为函数
        ok() {
          return false;
        },
        cancel() {},
      });
    };
    return { x, toggle, f1, f2, showDialog };
  },
};
</script>