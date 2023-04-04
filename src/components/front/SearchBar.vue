<script setup>
import HeroiconsOutlineSearch from "~icons/heroicons-outline/search";
</script>

<template>
  <div class="flex-1">
    <div class="flex">
      <select class="input py-3 px-4 mr-3 cursor-pointer" name="" id="">
        <option value="newPosts">最新貼文</option>
        <option value="myPosts">我的貼文</option>
      </select>
      <div class="flex">
        <input class="input py-3 px-4" type="text" placeholder="搜尋貼文" />
        <button
          type="button"
          class="bg-primary text-white border-black border-2 border-l-0 p-3 hover:bg-accent hover:text-black"
        >
          <HeroiconsOutlineSearch class="text-lg" />
        </button>
      </div>
    </div>
  </div>
</template>
