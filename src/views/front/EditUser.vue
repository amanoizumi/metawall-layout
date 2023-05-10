<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

import { apiPostPosts } from "@/api/posts";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const { userData } = storeToRefs(userStore);

const router = useRouter();

const postData = ref({});

const createPost = async () => {
  console.log("送出更新");
};
</script>

<template>
  <div>
    <div class="border-2 border-black bg-white py-[18px] relative mb-8">
      <div
        class="border-2 border-black bg-white absolute inset-0 -z-10 top-2 -left-2 -bottom-2 right-2"
      ></div>
      <h1 class="font-bold text-lg text-center">修改個人資料</h1>
    </div>

    <div class="border-2 border-black bg-white rounded-lg p-8"></div>
  </div>
</template>
