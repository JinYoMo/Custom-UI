<template>
  <div>
    <Switch v-model:value="y" />
    <!-- <Switch :value="y" @update:value="y = $event" /> 简化版v-model:表示switch的value是自动监听的 双向绑定即自动监听 -->
  </div>
</template> 
<script lang="ts">
import { ref } from "vue";
import Switch from "../lib/switch.vue";
export default {
  components: {
    Switch,
  },
  setup() {
    const y = ref(true);
    return { y };
  },
};
</script>