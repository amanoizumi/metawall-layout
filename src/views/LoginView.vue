<script setup>
import { ref } from "vue";

const user = ref({});

const login = () => {
  console.log("login");
};
</script>

<template>
  <main class="h-screen flex justify-center items-center">
    <section class="max-w-4xl flex gap-x-12">
      <img src="@/assets/images/login-banner.svg" alt="login page banner" />
      <div class="text-center">
        <h1 class="font-paytone text-primary text-6xl">MetaWall</h1>
        <p class="text-2xl font-bold mb-9">到元宇宙展開全新社交圈</p>
        <VForm class="flex flex-col" v-slot="{ errors }" @submit="login">
          <div class="mb-4 text-left">
            <VField
              name="帳號"
              class="input mb-1"
              type="email"
              placeholder="Email"
              v-model="user.email"
              rules="required|email"
            />
            <ErrorMessage
              :class="{ 'text-[#F57375] block': errors['帳號'] }"
              name="帳號"
            ></ErrorMessage>
          </div>
          <div class="mb-8 text-left">
            <VField
              name="密碼"
              class="input mb-1"
              type="password"
              v-model="user.password"
              placeholder="Password"
              rules="required|min:8"
            />
            <ErrorMessage
              :class="{ 'text-[#F57375] block': errors['密碼'] }"
              name="密碼"
            ></ErrorMessage>
          </div>
          <button class="btn mb-4 leading-none" type="submit">登入</button>
          <a href="#">註冊帳號</a>
        </VForm>
      </div>
    </section>
  </main>
</template>