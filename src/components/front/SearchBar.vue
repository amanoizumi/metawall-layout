<script setup>
import HeroiconsOutlineSearch from "~icons/heroicons-outline/search";
import { ref } from "vue";
import { storeToRefs } from "pinia";

import { usePostsStore } from "@/stores/posts.js";
import { apiGetPosts } from "@/api/posts";

const postsStore = usePostsStore();
const { postList } = storeToRefs(postsStore);

const sortPostSelect = ref("");
const searchInput = ref("");

const renderPost = async () => {
  console.log("renderPost");
  try {
    const res = await apiGetPosts(sortPostSelect.value, searchInput.value);
    postList.value = res.data.data;
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div class="flex-1">
    <div class="flex">
      <select
        @change="renderPost"
        class="input py-3 px-4 mr-3 cursor-pointer"
        v-model="sortPostSelect"
      >
        <option value="" disabled>篩選貼文</option>
        <option value="desc">由新至舊</option>
        <option value="asc">由舊至新</option>
      </select>
      <div class="flex">
        <input
          v-model="searchInput"
          class="input py-3 px-4"
          type="text"
          placeholder="搜尋貼文"
        />
        <button
          type="button"
          @click="renderPost"
          class="bg-primary text-white border-black border-2 border-l-0 p-3 hover:bg-accent hover:text-black"
        >
          <HeroiconsOutlineSearch class="text-lg" />
        </button>
      </div>
    </div>
  </div>
</template>
