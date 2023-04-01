import { ref } from "vue";
import axios from "axios";
import { defineStore } from "pinia";

const { VITE_APP_URL } = import.meta.env;

export const usePostsStore = defineStore("posts", () => {
  const postList = ref([]);

  const getPosts = () => {
    axios.get(`${VITE_APP_URL}/api/posts`).then((response) => {
      postList.value = response.data.data;
    });
  };

  return { postList, getPosts };
});
