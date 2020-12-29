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
  props: {
    size: String,
    disabled: Boolean, //声明为Boolean
  },
  setup(props, context) {
    console.log({ ...props }); //区别：1.props需要先声明再取值，attrs不用先声明 2.props不包含事件，attrs包含 3.props没有声明的属性，会跑到attrs里 4.props支持String以外的类型，attrs只有String类型
    console.log({ ...context.attrs });
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