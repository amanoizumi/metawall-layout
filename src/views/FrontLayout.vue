<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";

import { apiGetUserProfile } from "@/api/user";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const { userData } = storeToRefs(userStore);

onMounted(async () => {
  try {
    const res = await apiGetUserProfile();
    userData.value = res.data.data;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <FrontNavbar />
  <main>
    <RouterView class="mt-[65px] pt-[49px]" />
  </main>
</template>
