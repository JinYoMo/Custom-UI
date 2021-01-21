<template>
  <div class="coco-tabs">
    <div class="coco-tabs-nav" ref="container">
      <div class="coco-tabs-nav-item" :class="{selected:t===selected}" v-for="(t,index) in titles"
        :ref="el=>{if(t===selected) selectedItem=el}" @click="select(t)" :key="index">{{t}}
      </div>
      <div class="coco-tabs-nav-indicator" ref="indicator"></div>
    </div>
    <div class="coco-tabs-content">
      <!-- component实现插槽效果 -->
      <component class="coco-tabs-content-item" :class="{selected:c.props.title===selected}"
        v-for="(c,index) in defaults" :is="c" :key="index" />
    </div>
  </div>
</template>
<script lang="ts">
import { computed, onMounted, watchEffect, ref } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const selectedItem = ref<HTMLDivElement>(null);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    //需要在挂载之后执行 只在第一次渲染执行
    onMounted(() => {
      //第一次和后面几次均会执行 避免在挂载之前执行
      watchEffect(() => {
        const { width } = selectedItem.value.getBoundingClientRect(); //获取选中元素的宽度
        indicator.value.style.width = width + "px"; //将元素宽度赋给下划线
        const { left: left1 } = container.value.getBoundingClientRect();
        const { left: left2 } = selectedItem.value.getBoundingClientRect();
        const left = left2 - left1;
        indicator.value.style.left = left + "px"; //下划线的位置
      });
    });
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
    const select = (title: String) => {
      context.emit("update:selected", title);
    };
    return { selectedItem, indicator, container, defaults, titles, select };
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
    position: relative;
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
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms; //250ms是动画最舒服的时间
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>