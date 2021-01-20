<template>
  <div class="coco-tabs">
    <div class="coco-tabs-nav">
      <div class="coco-tabs-nav-item" :class="{selected:t===selected}" v-for="(t,index) in titles" @click="select(t)"
        :key="index">{{t}}
      </div>
    </div>
    <div class="coco-tabs-content">
      <!-- component实现插槽效果 -->
      <component class="coco-tabs-content-item" :is="current" />
    </div>
  </div>
</template>
<script lang="ts">
import { computed } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
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
    const current = computed(() => {
      return defaults.filter((tag) => {
        return tag.props.title === props.selected;
      })[0];
    });
    const select = (title: String) => {
      context.emit("update:selected", title);
    };
    return { defaults, titles, current, select };
  },
};
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.coco-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;
      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
  }
  &-content {
    padding: 8px 0;
  }
}
</style>