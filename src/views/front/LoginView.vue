<script>
import { onMounted } from "vue";

export default {
  setup() {
    const getList = () => {};

    onMounted(() => {
      getList();
    });
  },
};
</script>

<template>
  <main>
    <h1>MetaWall</h1>
    <p>到元宇宙展開全新社交圈</p>
    <input type="email" />
    <input type="password" />
  </main>
</template>
