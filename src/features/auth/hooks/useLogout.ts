import Cookies from "js-cookie";

export const useLogout = () => {
  return async () => {
    Cookies.remove("authToken");

    window.location.href = "/auth/login";
  }
}