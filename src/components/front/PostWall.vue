<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import { timestampToDate } from "@/utils/toDate";
import { apiGetPosts } from "@/api/posts";
import { usePostsStore } from "@/stores/posts.js";

const postsStore = usePostsStore();
const { postList } = storeToRefs(postsStore);

const initPostWall = async () => {
  try {
    const res = await apiGetPosts();
    postList.value = res.data.data;
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  initPostWall();
});
</script>

<template>
  <ul v-if="postList.length">
    <li
      v-for="(post, index) in postList"
      :key="post.id"
      class="bg-white border-2 border-b-4 border-black rounded-lg p-4"
      :class="{ 'mb-4': index !== postList.length - 1 }"
    >
      <div class="flex items-center mb-4">
        <img
          :src="post.user.photo"
          class="w-[50px] h-[50px] object-cover rounded-full border-2 border-black mr-[10px]"
        />
        <div>
          <p>{{ post.user.name }}</p>
          <time class="text-[#9B9893] text-xs">{{
            timestampToDate(post.createdAt)
          }}</time>
        </div>
      </div>
      <article>
        <p>{{ post.content }}</p>
      </article>
    </li>
  </ul>
  <div v-else class="bg-white border-2 border-b-4 border-black rounded-lg">
    <div class="border-b-2 border-black py-5 px-4">
      <div class="flex gap-x-[6px]">
        <span
          class="w-2 h-2 rounded-full border border-[#707070] bg-[#FAA722]"
        ></span>
        <span
          class="w-2 h-2 rounded-full border border-[#707070] bg-[#DE4B63]"
        ></span>
        <span
          class="w-2 h-2 rounded-full border border-[#707070] bg-[#83C51D]"
        ></span>
      </div>
    </div>
    <div class="text-center p-8">
      <p class="text-[#9B9893]">目前尚無動態，新增一則貼文吧！</p>
    </div>
  </div>
</template>
