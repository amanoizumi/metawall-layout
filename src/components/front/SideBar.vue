<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";

import HeroiconsBell from "~icons/heroicons/bell";
import HeroiconsHandThumbUp from "~icons/heroicons/hand-thumb-up";

import { useUserStore } from "@/stores/user";

const userStore = useUserStore();
const { userData } = storeToRefs(userStore);

const sideBarItem = computed(() => {
  return [
    { icon: HeroiconsBell, title: "追蹤名單" },
    { icon: HeroiconsHandThumbUp, title: "我按讚的文章" },
  ];
});
</script>

<template>
  <div class="min-w-[309px] bg-white border-2 border-black py-8 px-5">
    <button type="button" class="btn w-full mb-6">張貼動態</button>
    <div class="flex items-center font-bold mb-[22px]">
      <img
        :src="userData.photo"
        class="w-[50px] h-[50px] object-cover rounded-full border-2 border-black mr-4"
      />
      <p>{{ userData.name }}</p>
    </div>
    <ul class="flex flex-col space-y-[22px] font-bold">
      <li v-for="item in sideBarItem" :key="item.title">
        <a href="#" class="flex items-center group hover">
          <div
            class="flex justify-center items-center rounded-full border-2 w-[50px] h-[50px] border-black bg-[#E2EDFA] mr-4 group-hover:bg-primary group-hover:text-white"
          >
            <component class="text-[20px]" :is="item.icon" />
          </div>
          <p class="group-hover:text-primary">{{ item.title }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>
