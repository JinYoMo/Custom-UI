<template>
  <div :size="size">
    <!-- v-bind="$attrs" 将所有外层属性绑定到button上 -->
    <button v-bind="$attrs">
      <slot />
    </button>
    <!-- v-bind="rest" 将部分外层属性绑定到button上 -->
    <!-- <button v-bind="rest">
      <slot />
    </button> -->
  </div>
</template>
<script lang="ts">
export default {
  inheritAttrs: false, //取消最外层元素的继承 取消默认绑定
  setup(props, context) {
    //context.attrs可以拿到外层属性
    const { size, ...rest } = context.attrs;
    return { size, rest };
  },
};
</script>
<style lang="scss" scoped>
div {
  border: 1px solid red;
}
</style>