<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";

import { apiGetUserProfile } from "@/api/user";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const { userData } = storeToRefs(userStore);

const status = ref(false);
onMounted(async () => {
  try {
    const res = await apiGetUserProfile();
    userData.value = res.data.data;
    //   apiGetUserProfile 取回資料後再顯示
    status.value = true;
  } catch (error) {
    console.log(error);
  }
});
</script>

<template>
  <template v-if="status">
    <FrontNavbar />
    <main>
      <RouterView class="mt-[65px] pt-[49px]" />
    </main>
  </template>
</template>
