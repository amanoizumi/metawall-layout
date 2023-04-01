import { createApp } from "vue";
import { createPinia } from "pinia";

import axios from "axios";
import VueAxios from "vue-axios";

// VeeValidate
import { Form, Field, ErrorMessage, defineRule, configure } from "vee-validate";
import AllRules from "@vee-validate/rules";
import { localize, setLocale } from "@vee-validate/i18n";
import zhTW from "@vee-validate/i18n/dist/locale/zh_TW.json";

// VeeValidate 定義規則
Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});

// VeeValidate 設定
configure({
  generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
  validateOnInput: true, // 當輸入任何內容直接進行驗證
});

// 設定語系
setLocale("zh_TW");

import App from "./App.vue";
import router from "./router";

import "./assets/index.css";

const app = createApp(App);

app.use(createPinia());

app.use(VueAxios, axios);
app.provide("axios", app.config.globalProperties.axios);

app.component("FormView", Form);
app.component("FieldView", Field);
app.component("ErrorMessage", ErrorMessage);

app.use(router);

app.mount("#app");
