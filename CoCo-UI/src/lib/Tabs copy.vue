<template>
  <div class="coco-tabs">
    <div class="coco-tabs-nav" ref="container">
      <div class="coco-tabs-nav-item" :class="{selected:t===selected}" v-for="(t,index) in titles"
        :ref="el=>{if(el) navItems[index]=el}" @click="select(t)" :key="index">{{t}}
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
import { computed, onMounted, onUpdated, ref } from "vue";
import Tab from "./Tab.vue";
export default {
  props: {
    selected: {
      type: String,
    },
  },
  setup(props, context) {
    const navItems = ref<HTMLDivElement[]>([]);
    const indicator = ref<HTMLDivElement>(null);
    const container = ref<HTMLDivElement>(null);
    const x = () => {
      const divs = navItems.value;
      const result = divs.filter((div) =>
        div.classList.contains("selected")
      )[0]; //获取到被选中元素
      const { width } = result.getBoundingClientRect(); //获取选中元素的宽度
      indicator.value.style.width = width + "px"; //将元素宽度赋给下划线
      const { left: left1 } = container.value.getBoundingClientRect();
      const { left: left2 } = result.getBoundingClientRect();
      const left = left2 - left1;
      indicator.value.style.left = left + "px"; //下划线的位置
    };
    //需要在挂载之后执行 只在第一次渲染执行
    onMounted(x);
    //更新时渲染
    onUpdated(x);
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
    //使用计算属性修改current 改变一次都会重新计算
    // const current = computed(() => {
    //   return defaults.filter((tag) => {
    //     return tag.props.title === props.selected;
    //   })[0];
    // });
    const select = (title: String) => {
      context.emit("update:selected", title);
    };
    return { navItems, indicator, container, defaults, titles, select };
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