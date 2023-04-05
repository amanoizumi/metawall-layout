import axios from "axios";
import Cookies from "js-cookie";

const { VITE_APP_URL } = import.meta.env;

const userRequest = axios.create({
  baseURL: `${VITE_APP_URL}/api/user`,
});

const userAuthorizationRequest = () => {
  return axios.create({
    baseURL: `${VITE_APP_URL}/api/user`,
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
};

// 登入
export const apiPostUserSignIn = (data) => userRequest.post("/sign_in", data);
// 註冊
export const apiPostUserSignUp = (data) => userRequest.post("/sign_up", data);

// 權限
// 取得個人資料
export const apiGetUserProfile = () => {
  return userAuthorizationRequest().get("/profile");
};
