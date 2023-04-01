<script setup></script>

<template>
  <nav class="fixed top-0 inset-x-0 bg-white py-3 border-b-2 border-black">
    <div class="container flex justify-between">
      <RouterLink to="/">
        <h1 class="font-paytone text-[26px]">MetaWall</h1>
      </RouterLink>
      <div class="flex items-center">
        <img
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=761&q=80"
          class="w-[30px] h-[30px] object-cover rounded-full border-2 border-black mr-[10px]"
        />
        <a href="#" class="font-bold border-b-2 border-black">Member</a>
      </div>
    </div>
  </nav>
</template>
