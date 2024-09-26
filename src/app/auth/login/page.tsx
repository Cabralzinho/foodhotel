import { Input } from "../components/Input";

export default function Login() {
    return (
    <main className="flex flex-col justify-center items-center gap-14">
      <h1 className="text-white text-6xl font-lobster">Login</h1>

      <form className="flex flex-col gap-8 items-center">
        <Input title="email" type="email" placeholder="Insira o seu email" name="email" id="email"/>
        <Input title="password" type="password" placeholder="Insira a sua senha" name="password" id="password"/>
        
        <button
          type="submit"
          className="border-2 border-white text-white px-10 py-2 w-fit rounded-xl"
        >
          Login
        </button>
      </form>
    </main>
  );
}
