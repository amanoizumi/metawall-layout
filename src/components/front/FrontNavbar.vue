<script setup>
import { ref, watch } from "vue";
import { useUserStore } from "@/stores/user";

const { userData } = useUserStore();
const navbarData = ref({});
watch(userData, (n) => {
  navbarData.value = n.value;
});
</script>

<template>
  <nav class="fixed top-0 inset-x-0 bg-white py-3 border-b-2 border-black">
    <div class="container flex justify-between">
      <RouterLink to="/">
        <h1 class="font-paytone text-[26px]">MetaWall</h1>
      </RouterLink>
      <div class="flex items-center">
        <img
          :src="navbarData.photo"
          class="w-[30px] h-[30px] object-cover rounded-full border-2 border-black mr-[10px]"
        />
        <a href="#" class="font-bold border-b-2 border-black">Member</a>
      </div>
    </div>
  </nav>
</template>
