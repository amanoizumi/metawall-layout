<script setup>
import { ref, onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

import { apiGetUserProfile } from "@/api/user";
import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const { userData } = storeToRefs(userStore);

const router = useRouter();

const status = ref(false);
onMounted(async () => {
  try {
    const res = await apiGetUserProfile();
    userData.value = res.data.data;
    //   apiGetUserProfile 取回資料後再顯示
    status.value = true;
  } catch (error) {
    console.log(error);
    alert("請重新登入");
    router.push("login");
  }
});
</script>

<template>
  <template v-if="status">
    <FrontNavbar />
    <main>
      <div
        class="max-w-[869px] flex mt-[65px] pt-[49px] gap-x-6 mx-auto items-start"
      >
        <RouterView class="flex-1" />
        <SideBar />
      </div>
    </main>
  </template>
</template>
