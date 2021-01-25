
<template>
  <div class="topnav">
    <router-link to="/" class="logo">
      <svg class="icon">
        <use xlink:href="#icon-king"></use>
      </svg>
    </router-link>
    <!-- <div class="logo">LOGO</div> -->
    <ul class="menu">
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
    </ul>
    <svg class="toggleAside" @click="toggleMenu">
      <use xlink:href="#icon-menu"></use>
    </svg>
  </div>
</template>
<script lang="ts">
import { inject, Ref } from "vue";
export default {
  setup() {
    const menuVisible = inject<Ref<Boolean>>("menuVisible"); //get ts语法将menuVisible标记为Boolean
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value; //Ref为盒子 内部value才能取到值  menuVisible.value
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
$color: #007974;
.topnav {
  color: $color;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
  justify-content: center; //居中
  align-items: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 32px;
    height: 32px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
    background: fade-out(black, 0.9);
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>