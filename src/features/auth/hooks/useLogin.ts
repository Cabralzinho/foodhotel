import { api } from "@/libs/api";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
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

      if (response.status !== 200) {
        throw new Error("Algo deu errado");
      }

      const { token } = await response.data;

      localStorage.setItem("authToken", token);

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
