<template>
  <div>
    Tabs组件
    <component :is="defaults[0]" />
    <component :is="defaults[1]" />
  </div>
</template>
<script lang="ts">
import Tab from "./Tab.vue";
export default {
  setup(props, context) {
    //在运行是确认子组件的类型 检查context.slots.default()数组的每一项type
    const defaults = context.slots.default();
    defaults.forEach((tags) => {
      if (tags.type !== Tab) {
        throw new Error("Tabs 子标签必须是 Tab");
      }
    });
    return { defaults };
  },
};
</script>