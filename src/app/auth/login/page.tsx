"use client";

import { LoginForm } from "@/features/auth/components/LoginForm";

export default function Login() {


  return (
    <main className="flex flex-col justify-center items-center gap-14 w-full">
      <h1 className="text-white text-6xl font-lobster">Login</h1>

      <LoginForm />
    </main>
  );
}
