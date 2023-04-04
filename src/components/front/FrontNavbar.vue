<script setup>
import { storeToRefs } from "pinia";

import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const { userData } = storeToRefs(userStore);
</script>

<template>
  <nav class="fixed top-0 inset-x-0 bg-white py-3 border-b-2 border-black">
    <div class="container flex justify-between">
      <RouterLink to="/">
        <h1 class="font-paytone text-[26px]">MetaWall</h1>
      </RouterLink>
      <div class="flex items-center">
        <img
          :src="userData.photo"
          class="w-[30px] h-[30px] object-cover rounded-full border-2 border-black mr-[10px]"
        />
        <a href="#" class="font-bold border-b-2 border-black">Member</a>
      </div>
    </div>
  </nav>
</template>
