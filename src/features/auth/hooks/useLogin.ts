import { api } from "@/libs/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

export const useLogin = () => {
  const router = useRouter();

  const { mutate: login, ...rest } = useMutation({
    mutationFn: async ({
      email,
      password,
    }: {
      email: string;
      password: string;
    }) => {
      const response = await api.post("/login", {
        email,
        password,
      });

      const { token } = await response.data;

      Cookies.set("authToken", token, {expires: 1});

      return token;
    },

    onSuccess: () => {
      toast.success("Login efetuado com sucesso");

      router.push("/");
    },
    onError: () => {
      toast.error("Email ou senha inválidos");
    },
  });

  return {
    login,
    ...rest,
  };
};
