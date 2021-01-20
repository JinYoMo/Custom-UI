<template>
  <div>
    Tabs组件
    <div v-for="(t,index) in titles" :key="index">{{t}}</div>
    <component v-for="(c,index) in defaults" :key="index" :is="c" /> <!-- component 实现插槽效果-->
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
    const titles = defaults.map((tag) => {
      return tag.props.title;
    });
    return { defaults, titles };
  },
};
</script>