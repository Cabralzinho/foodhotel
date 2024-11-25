import axios from "axios";
import Cookies from "js-cookie";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

api.interceptors.request.use(async(config) => {
  await new Promise(resolve => setTimeout(resolve, 1000));

  const authToken = Cookies.get("authToken");

  if (authToken) {
    config.headers.Authorization = `Bearer ${authToken}`;
  }

  return config
})

api.interceptors.response.use(undefined, error => {
  if (error.response.status === 401) {
    Cookies.remove("authToken");
    window.location.href = "/auth/login";
  }
})

export { api };
