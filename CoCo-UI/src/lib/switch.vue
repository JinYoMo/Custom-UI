<template>
  <button @click="toggle" class="coco-switch" :class="{'coco-checked':value}"><span></span></button>
</template>
<script>
import { ref } from 'vue';
export default {
  props: {
    value: Boolean
  },
  setup (props, context) {
    // const checked = ref(false);  //checked默认值为false :class="{checked:checked}"可简写为:class="{checked}"
    const toggle = () => {
      // checked.value = !checked.value;  //checked是常量 checked不可改 但checked是格ref盒子 checked里的value是可以改的
      context.emit('update:value', !props.value)
    }
    return { toggle }
  }
}
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.coco-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2/2;
    transition: all 250ms; //点击丝滑
  }
  &.coco-checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.coco-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>