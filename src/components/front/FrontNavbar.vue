<script setup>
import { storeToRefs } from "pinia";

import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const { userData } = storeToRefs(userStore);
</script>

<template>
  <nav class="fixed top-0 inset-x-0 bg-white py-3 border-b-2 border-black">
    <div class="max-w-[869px] flex justify-between mx-auto">
      <RouterLink to="/">
        <h1 class="font-paytone text-[26px]">MetaWall</h1>
      </RouterLink>
      <div class="flex items-center relative">
        <img
          :src="userData.photo"
          class="w-[30px] h-[30px] object-cover rounded-full border-2 border-black mr-[10px]"
        />
        <a href="#" class="font-bold border-b-2 border-black">Member</a>
        <div class="absolute top-10 bg-white border-2 border-black">
          <div
            class="border-2 border-black bg-white absolute inset-0 -z-10 top-2 left-2 -bottom-2 -right-2"
          ></div>
          <ul class="min-w-[182px] flex flex-col">
            <li class="border-b-2 border-black">
              <RouterLink
                class="text-center block py-2 hover:bg-[#efece7]"
                to="/"
              >
                我的貼文牆
              </RouterLink>
            </li>
            <li class="border-b-2 border-black">
              <RouterLink
                class="text-center block py-2 hover:bg-[#efece7]"
                to="/editUser"
              >
                修改個人資料
              </RouterLink>
            </li>
            <li>
              <RouterLink
                class="text-center block py-2 hover:bg-[#efece7]"
                to="/"
              >
                登出
              </RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
