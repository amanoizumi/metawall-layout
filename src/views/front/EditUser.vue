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

const submitEditUser = async () => {
  console.log("送出更新");
};

console.log(userData);
</script>

<template>
  <div>
    <div class="border-2 border-black bg-white py-[18px] relative mb-8">
      <div
        class="border-2 border-black bg-white absolute inset-0 -z-10 top-2 -left-2 -bottom-2 right-2"
      ></div>
      <h1 class="font-bold text-lg text-center">修改個人資料</h1>
    </div>

    <div>
      <div class="flex pl-3">
        <button
          class="border-black border-2 border-b-0 rounded-t-lg px-8 py-2 bg-black text-white"
          type="button"
        >
          暱稱修改
        </button>
        <button
          class="border-black border-2 border-b-0 rounded-t-lg px-8 py-2 bg-white"
          type="button"
        >
          重設密碼
        </button>
      </div>
      <div class="border-2 border-black bg-white rounded-lg px-[106px] py-8">
        <img
          :src="userData.photo"
          class="w-[107px] h-[107px] object-cover rounded-full border-2 border-black mx-auto mb-4"
        />
        <button
          type="button"
          class="block mx-auto py-2 px-8 bg-black text-white mb-3"
        >
          上傳大頭照
        </button>

        <VForm
          class="flex flex-col gap-y-4"
          ref="formDom"
          v-slot="{ errors }"
          @submit="submitEditUser"
        >
          <div>
            <label for="nickName">暱稱</label>
            <VField
              id="nickName"
              name="暱稱"
              class="input mb-1"
              type="text"
              placeholder="暱稱"
              rules="required|min:2"
            />
            <ErrorMessage
              :class="{ 'text-[#F57375] block': errors['暱稱'] }"
              name="暱稱"
            ></ErrorMessage>
          </div>
          <div>
            <label for="nickName">性別</label>
            <VField
              type="radio"
              id="nickName"
              name="性別"
              class="w-5 h-5 text-black border-gray-300 focus:ring-primary focus:ring-2"
              placeholder="性別"
              rules="required|min:2"
            />
            <ErrorMessage
              :class="{ 'text-[#F57375] block': errors['性別'] }"
              name="性別"
            ></ErrorMessage>
          </div>
        </VForm>
      </div>
    </div>
  </div>
</template>
