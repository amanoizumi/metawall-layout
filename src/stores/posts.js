import { ref } from "vue";
import { defineStore } from "pinia";

export const usePostsStore = defineStore("posts", () => {
  const postList = ref([]);

  return { postList };
});
