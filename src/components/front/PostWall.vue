<script setup>
import { onMounted } from "vue";
import { apiGetPosts } from "@/api/posts";
import { usePostsStore } from "@/stores/posts.js";

const postsStore = usePostsStore();

const initPostWall = async () => {
  try {
    const res = await apiGetPosts();
    postsStore.postList = res.data.data;
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  initPostWall();
});
</script>

<template>
  <ul v-if="postsStore.postList.length">
    <li
      v-for="(post, index) in postsStore.postList"
      :key="index"
      class="bg-white border-2 border-b-4 border-black rounded-lg p-4"
      :class="{ 'mb-4': index !== postsStore.postList.length - 1 }"
    >
      <div class="flex items-center mb-4">
        <img
          :src="post.user.photo"
          class="w-[50px] h-[50px] object-cover rounded-full border-2 border-black mr-[10px]"
        />
        <div>
          <p>{{ post.user.name }}</p>
          <time class="text-[#9B9893] text-xs"> 2022/1/10 12:00 </time>
        </div>
      </div>
      <article>
        <p>{{ post.content }}</p>
      </article>
    </li>
  </ul>
</template>
