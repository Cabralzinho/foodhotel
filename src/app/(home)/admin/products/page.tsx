"use client";

import { ArrowLeft } from "@/app/components/Icons/ArrowLeft";
import { apiAddProduct } from "@/app/functions/products";
import Link from "next/link";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

export default function Products() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const handleChangeQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuantity(Number(e.target.value));
  };

  const handleAddProduct = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !price || !quantity) {
      return toast.error("Preencha todos os campos!");
    }

    apiAddProduct(name, price, quantity);

    toast.success("Produto adicionado com sucesso!");

    setName("");
    setPrice(0);
    setQuantity(0);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="w-fit px-4">
        <Link className="w-full max-w-[250px]" href="/">
          <ArrowLeft className="w-[35px]" />
        </Link>
      </header>
      <main className="flex flex-col gap-6 px-6 h-full items-center justify-center">
        <h1 className="text-3xl">Adicionar produtos</h1>

        <Toaster position="top-center" reverseOrder={false} />

        <form className="text-black flex flex-col gap-4 bg-teal-200 px-8 py-12 rounded-lg border border-slate-600/70 drop-shadow-xl">
          <div className="flex flex-col gap-1">
            <label>Nome do produto</label>
            <input
              onChange={handleChangeName}
              className="py-2 px-4 rounded-lg outline-none border border-gray-400/70 placeholder:text-slate-800"
              type="text"
              placeholder="Nome do produto"
              value={name}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Preço do produto</label>
            <input
              onChange={handleChangePrice}
              className="py-2 px-4 rounded-lg outline-none border border-gray-400/70 placeholder:text-slate-800"
              type="number"
              placeholder="Preço"
              min={0}
              value={price}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="">Quantidade</label>
            <input
              onChange={handleChangeQuantity}
              className="py-2 px-4 rounded-lg outline-none border border-gray-400/70 placeholder:text-slate-800"
              type="number"
              placeholder="Quantidade"
              min={0}
              value={quantity}
            />
          </div>

          <button
            onClick={handleAddProduct}
            className="bg-secondaryColor hover:bg-secondaryColor/60 text-black px-10 py-2 rounded-lg transition-all border border-black/40"
            type="submit"
          >
            Adicionar
          </button>
        </form>
      </main>
    </div>
  );
}
