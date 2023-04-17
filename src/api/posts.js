import axios from "axios";
import Cookies from "js-cookie";

const { VITE_APP_URL } = import.meta.env;

const postRequest = axios.create({
  baseURL: `${VITE_APP_URL}/api/posts`,
});

const postAuthorizationRequest = () => {
  return axios.create({
    baseURL: `${VITE_APP_URL}/api/posts`,
    headers: {
      Authorization: `Bearer ${Cookies.get("token")}`,
    },
  });
};

export const apiGetPosts = (timeSort = "", q = "") => {
  let path = "";
  let pathArr = [];

  if (timeSort !== "" || q !== "") {
    path += "?";
  }

  if (timeSort === "asc") {
    pathArr.push(`timeSort=${timeSort}`);
  }

  if (q !== "") {
    pathArr.push(`q=${q}`);
  }

  path += pathArr.join("&");
  return postRequest.get(path);
};

export const apiGetPost = (postId) => {
  return postRequest.get(`/${postId}`);
};

// 權限
// 取得個人資料
export const apiPostPosts = (data) => {
  return postAuthorizationRequest().post("/", data);
};

// 發表貼文留言
export const apiPostComment = (postId, comment) => {
  return postAuthorizationRequest().post(`/${postId}/comments`, comment);
};
