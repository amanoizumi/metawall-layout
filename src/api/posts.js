import axios from "axios";
const { VITE_APP_URL } = import.meta.env;

const userRequest = axios.create({
  baseURL: `${VITE_APP_URL}/api/posts`,
});

export const apiGetPosts = () => userRequest.get("/");
