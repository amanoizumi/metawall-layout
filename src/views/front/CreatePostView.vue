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
  const obj = {
    user: userData.value._id,
    content: postData.value.content,
  };

  try {
    await apiPostPosts(obj);
    router.push("/");
  } catch (error) {
    console.log(error);
  }
};
</script>

<template>
  <div>
    <div class="border-2 border-black bg-white py-[18px] relative mb-4">
      <div
        class="border-2 border-black bg-white absolute inset-0 -z-10 top-2 -left-2 -bottom-2 right-2"
      ></div>
      <h1 class="font-bold text-lg text-center">張貼動態</h1>
    </div>

    <div class="border-2 border-black bg-white rounded-lg p-8">
      <VForm v-slot="{ errors }" @submit="createPost">
        <div class="mb-4">
          <h2 class="mb-1">貼文內容</h2>
          <VField
            as="textarea"
            class="input py-3 px-4 resize-none"
            name="貼文內容"
            id=""
            cols="30"
            rows="6"
            placeholder="輸入您的貼文內容"
            rules="required"
            v-model="postData.content"
          ></VField>
          <ErrorMessage
            :class="{ 'text-[#F57375] block': errors['貼文內容'] }"
            name="貼文內容"
          ></ErrorMessage>
        </div>
        <div>
          <button type="button" class="btn px-8 py-1 bg-black mb-4">
            上傳圖片
          </button>
        </div>
        <div class="flex justify-center">
          <button
            type="submit"
            class="border-2 border-black rounded-lg bg-[#A8B0B9] w-4/5 py-4 font-bold"
          >
            送出貼文
          </button>
        </div>
      </VForm>
    </div>
  </div>
</template>
