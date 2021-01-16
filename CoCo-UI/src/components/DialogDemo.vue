<template>
  <div>Dialog示例</div>
  <h1>示例1</h1>
  <Button @click="toggle">toggle</Button>
  <!-- 两种方式相同 <Dialog :visible="x" @update:visible="x=$event"></Dialog> -->
  <Dialog v-model:visible="x" :closeOnClickOverlay="false" :ok="f1" :cancel="f2"></Dialog>
</template> 

<script lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { ref } from "vue";
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
    return { x, toggle, f1, f2 };
  },
};
</script>