"use client";

import { Close } from "@/components/Icons/Close";
import { Modal } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <h1 className="font-lobster text-6xl text-center pt-5">10FoodHotel</h1>
      <section className="flex flex-col justify-center items-center w-full gap-8 h-full max-h-[500px]">
        <Link
          href="/admin/products"
          className="w-full max-w-[250px] bg-white text-primaryColor px-10 py-2 rounded-lg hover:bg-gray-200 transition-all text-center border border-black"
        >
          Adicionar produtos
        </Link>
        <Link
          href="/products"
          className="w-full max-w-[250px] bg-white text-primaryColor px-10 py-2 rounded-lg hover:bg-gray-200 transition-all text-center border border-black"
        >
          Lançar consumo
        </Link>

        <Link
          href={"/guest/2"}
          className="w-full max-w-[250px] bg-white text-primaryColor px-10 py-2 rounded-lg hover:bg-gray-200 transition-all text-center border border-black"
        >
          Consultar conta
        </Link>

        <Link
          href="#"
          className="max-w-[250px] bg-white text-primaryColor px-10 py-2 rounded-lg hover:bg-gray-200 transition-all w-full text-center border border-black"
        >
          Comandos abertas
        </Link>
        <button
          onClick={handleOpen}
          className="bg-white text-primaryColor px-10 py-2 rounded-lg hover:bg-gray-200 transition-all w-full max-w-[250px] border border-black"
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
              <button className="bg-primaryColor px-10 py-2 rounded-lg hover:bg-primaryColor/80 transition-all w-full">
                Sla
              </button>
              <button className="bg-primaryColor px-10 py-2 rounded-lg hover:bg-primaryColor/80 transition-all w-full">
                Sla2
              </button>
              <button className="bg-primaryColor px-10 py-2 rounded-lg hover:bg-primaryColor/80 transition-all w-full">
                Conta
              </button>
              <button className="bg-primaryColor px-10 py-2 rounded-lg hover:bg-primaryColor/80 transition-all w-full">
                Sair
              </button>
            </div>
          </div>
        </Modal>
      </section>
    </>
  );
}
