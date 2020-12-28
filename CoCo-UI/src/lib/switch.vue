<template>
  <button @click="toggle" :class="{checked:value}"><span></span></button>
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
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
}
span {
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background: white;
  border-radius: $h2/2;
  transition: left 250ms; //点击丝滑
}
button.checked {
  background: blue;
}
button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
button:focus {
  outline: none;
}
</style>