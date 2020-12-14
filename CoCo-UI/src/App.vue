
<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from "vue";
export default {
  name: "App",
  setup() {
    const menuVisible = ref(false); //menuVisible值默认为false
    provide("xxx", menuVisible); //set  menuVisible取名为xxx provide设置的变量，任意子组件均可访问
  },
};
</script>
