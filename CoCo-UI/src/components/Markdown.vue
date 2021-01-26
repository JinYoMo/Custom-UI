<template>
  <article class="markdown-body" v-html="content">
  </article>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  props: {
    path: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const content = ref<string>(null);
    //动态引入 异步加载 速度可能比较慢
    import(props.path).then((result) => {
      content.value = result.default;
    });
    return {
      content,
    };
  },
};
</script>