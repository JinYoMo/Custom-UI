
<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true); //menuVisible值默认为false 页面宽度小于500则为手机端
    provide("menuVisible", menuVisible); //set  menuVisible取名为menuVisible provide设置的变量，任意子组件均可访问
  },
};
</script>
