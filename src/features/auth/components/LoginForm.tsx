import { Button, TextField } from "@mui/material";
import { useRouter } from "next/navigation";

export const LoginForm = () => {

  const router = useRouter()

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    router.push('/')
  }


  return (
    <form className="flex flex-col gap-8 items-center bg-white px-4 py-8 rounded-lg">
      <TextField color="primary" label="Email" variant="outlined" />
      <TextField color="primary" label="Senha" variant="outlined" />

      <Button
        className="w-full"
        variant="contained"
        color="primary"
        size="large"
        onClick={handleSubmit}
      >
        Entrar
      </Button>
    </form>
  );
};
