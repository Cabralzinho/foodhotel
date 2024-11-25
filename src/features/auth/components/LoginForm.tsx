import { Button, TextField } from "@mui/material";
import { useLogin } from "../hooks/useLogin";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Toaster } from "react-hot-toast";

type FormProps = z.infer<typeof schema>;

const schema = z.object({
  email: z.string().email("Informe um email valido"),
  password: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export const LoginForm = () => {
  const { login, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormProps>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  const onSubmitLogin = handleSubmit(async (data) => {
    login(data);
  });

  return (
    <form
      onSubmit={onSubmitLogin}
      className="flex flex-col gap-8 items-center bg-white px-4 py-8 rounded-lg w-full max-w-[350px]"
    >
      <Toaster toastOptions={{ duration: 2000 }} position="top-center" />

      <TextField
        {...register("email")}
        disabled={isPending}
        error={!!errors.email}
        helperText={errors.email?.message}
        className="w-full"
        color="primary"
        label="Email"
        variant="outlined"
      />
      <TextField
        {...register("password")}
        disabled={isPending}
        error={!!errors.password}
        helperText={errors.password?.message}
        className="w-full"
        color="primary"
        label="Senha"
        variant="outlined"
        type="password"
      />

      <Button
        disabled={!isValid || isPending}
        type="submit"
        className="w-full"
        variant="contained"
        color="primary"
        size="large"
      >
        Entrar
      </Button>
    </form>
  );
};
