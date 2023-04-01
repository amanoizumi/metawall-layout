<script setup>
const login = () => console.log("login");
</script>

<template>
  <main class="h-screen flex justify-center items-center">
    <section class="max-w-4xl flex gap-x-12">
      <img src="@/assets/images/login-banner.svg" alt="login page banner" />
      <div class="text-center">
        <h1 class="font-paytone text-primary text-6xl">MetaWall</h1>
        <p class="text-2xl font-bold mb-9">到元宇宙展開全新社交圈</p>
        <VForm class="flex flex-col" @submit="login">
          <VField
            name="email"
            class="input mb-4"
            type="email"
            placeholder="Email"
          />
          <ErrorMessage name="email" />
          <VField
            name="password"
            class="input mb-8"
            type="password"
            placeholder="Password"
          />
          <ErrorMessage name="password" />
          <button class="btn mb-4 leading-none" type="submit">登入</button>
          <a href="#">註冊帳號</a>
        </VForm>
      </div>
    </section>
  </main>
</template>
