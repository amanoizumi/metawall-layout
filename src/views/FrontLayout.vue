<script setup>
import { onMounted } from "vue";
import { apiGetUserProfile } from "@/api/user";

import { useUserStore } from "@/stores/user";

const { userData } = useUserStore();

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
