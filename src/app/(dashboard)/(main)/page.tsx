"use client";

import { Close } from "@/components/Icons/Close";
import { useLogout } from "@/features/auth/hooks/useLogout";
import { Modal } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  const logout = useLogout();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <main className="flex flex-col justify-center min-h-screen">
      <h1 className="font-lobster text-6xl text-center pt-5 absolute flex justify-center top-0 w-full">
        10FoodHotel
      </h1>
      <section className="flex flex-col justify-center items-center w-full gap-5">
        <Link
          href="/admin/products"
          className="w-full max-w-[250px] bg-white text-primary px-10 py-4 rounded-lg hover:bg-gray-200 transition-all text-center shadow-md"
        >
          Adicionar produtos
        </Link>
        {/* <Link
          href="/admin/employee"
          className="w-full max-w-[250px] bg-white text-primary px-10 py-4 rounded-lg hover:bg-gray-200 transition-all text-center shadow-md"
        >
          Adicionar funcionário
        </Link> */}
        <Link
          href={"/rooms"}
          className="w-full max-w-[250px] bg-white text-primary px-10 py-4 rounded-lg hover:bg-gray-200 transition-all text-center shadow-md"
        >
          Consultar Quarto
        </Link>

        <Link
          href="#"
          className="max-w-[250px] bg-white text-primary px-10 py-4 rounded-lg hover:bg-gray-200 transition-all w-full text-center shadow-md"
        >
          Comandos abertas
        </Link>
        <button
          onClick={handleOpen}
          className="bg-white text-primary px-10 py-4 rounded-lg hover:bg-gray-200 transition-all w-full max-w-[250px] shadow-md"
        >
          Configurações
        </button>

        <Modal
          open={open}
          onClose={handleClose}
          className="w-full flex flex-col items-center justify-center"
        >
          <div className="bg-slate-100 rounded-xl p-5 gap-8 flex flex-col text-center w-full max-w-[400px]">
            <div className="flex justify-between items-center gap-6">
              <h2 className="text-4xl font-lobster">Configurações</h2>
              <Close className="w-6 h-6 cursor-pointer" onClick={handleClose} />
            </div>

            <div className="flex flex-col gap-4 text-white">
              <button className="bg-primary px-10 py-2 rounded-lg hover:bg-primary/80 transition-all w-full">
                Conta
              </button>
              <button
                onClick={logout}
                className="bg-red-500 px-10 py-2 rounded-lg hover:bg-red-600 transition-all w-full"
              >
                Sair
              </button>
            </div>
          </div>
        </Modal>
      </section>
    </main>
  );
}
