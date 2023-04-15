<script setup>
import { ref, watch } from "vue";
import { useRouter } from "vue-router";
import { apiPostUserSignIn, apiPostUserSignUp } from "@/api/user";
import Cookies from "js-cookie";

const router = useRouter();

const status = ref("signIn");
const user = ref({});
const formDom = ref(null);

const submitForm = async () => {
  if (status.value === "signIn") {
    try {
      const res = await apiPostUserSignIn({
        email: user.value.email,
        password: user.value.password,
      });
      Cookies.set("token", res.data.user.token);
      alert(`${res.data.user.name}，歡迎你！`);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  }

  if (status.value === "signUp") {
    try {
      const res = await apiPostUserSignUp({
        name: user.value.name,
        email: user.value.email,
        password: user.value.password,
        confirmPassword: user.value.confirmPassword,
      });

      alert(`${res.data.user.name}，恭喜你註冊成功！可以嘗試登入囉！`);
      status.value = "signIn";
      // router.push("/");
    } catch (error) {
      console.log(error);
    }
  }
};

const changeFormMode = (mode) => {
  if (mode === "signUp") {
    status.value = "signUp";
  }
  if (mode === "signIn") {
    status.value = "signIn";
  }
};

watch(status, () => formDom.value.resetForm());
</script>

<template>
  <main class="h-screen flex justify-center items-center">
    <section class="max-w-4xl flex gap-x-12">
      <img src="@/assets/images/login-banner.svg" alt="login page banner" />
      <div class="text-center">
        <h1 class="font-paytone text-primary text-6xl">MetaWall</h1>
        <p class="text-2xl font-bold mb-9" v-if="status === 'signIn'">
          到元宇宙展開全新社交圈
        </p>
        <p class="text-2xl font-bold mb-9" v-if="status === 'signUp'">註冊</p>
        <VForm
          class="flex flex-col"
          ref="formDom"
          v-slot="{ errors }"
          @submit="submitForm"
        >
          <div class="mb-4 text-left" v-if="status === 'signUp'">
            <VField
              name="暱稱"
              class="input mb-1"
              type="text"
              placeholder="暱稱"
              v-model="user.name"
              rules="required|min:2"
            />
            <ErrorMessage
              :class="{ 'text-[#F57375] block': errors['暱稱'] }"
              name="暱稱"
            ></ErrorMessage>
          </div>
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
          <div class="mb-4 text-left" :class="{ 'mb-8': status === 'signIn' }">
            <VField
              name="密碼"
              class="input mb-1"
              type="password"
              placeholder="密碼"
              v-model="user.password"
              rules="required|min:8"
            />
            <ErrorMessage
              :class="{ 'text-[#F57375] block': errors['密碼'] }"
              name="密碼"
            ></ErrorMessage>
          </div>
          <div class="mb-8 text-left" v-if="status === 'signUp'">
            <VField
              name="再度確認密碼"
              class="input mb-1"
              type="password"
              v-model="user.confirmPassword"
              placeholder="再度確認密碼"
              rules="required|min:8"
            />
            <ErrorMessage
              :class="{ 'text-[#F57375] block': errors['再度確認密碼'] }"
              name="再度確認密碼"
            ></ErrorMessage>
          </div>
          <button
            class="btn mb-4 leading-none"
            type="submit"
            v-if="status === 'signIn'"
          >
            登入
          </button>
          <button
            class="btn mb-4 leading-none"
            type="submit"
            v-if="status === 'signUp'"
          >
            註冊
          </button>
          <a
            v-if="status === 'signIn'"
            @click.prevent="changeFormMode('signUp')"
            href="#"
            >註冊帳號</a
          >
          <a
            v-if="status === 'signUp'"
            @click.prevent="changeFormMode('signIn')"
            href="#"
            >登入</a
          >
        </VForm>
      </div>
    </section>
  </main>
</template>
