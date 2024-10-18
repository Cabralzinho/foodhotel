"use client";

import { Product } from "@/app/types/ProductsType";
import { useState } from "react";
import Image from "next/image";
import { Trash } from "@/app/components/Icons/Trash";
import { Pencil } from "@/app/components/Icons/Pencil";
import { deleteProductById, editProductById } from "@/app/functions/products";
import toast, { Toaster } from "react-hot-toast";
import { Modal } from "@mui/material";

export const CardProduct = ({ showProducts }: { showProducts: Product[] }) => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [openModalById, setOpenModalById] = useState<number | null>(null);
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(0);

  const handleAddQuantity = (id: number) => {
    setQuantities((prevQuantity) => ({
      ...prevQuantity,
      [id]: (prevQuantity[id] || 0) + 1,
    }));
  };

  const handleRemoveQuantity = (id: number) => {
    setQuantities((prevQuantities) => {
      const currentQuantity = prevQuantities[id] || 0;

      if (currentQuantity > 0) {
        return {
          ...prevQuantities,
          [id]: currentQuantity - 1,
        };
      }

      return prevQuantities;
    });
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      await deleteProductById(id);

      toast.success("Produto deletado com sucesso!");

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(e.target.value));
  };

  const handleEditProduct = async (id: number) => {
    try {
      await editProductById(id, name, price, quantity);

      toast.success("Produto editado com sucesso!");

      setOpenModalById(null);

      setTimeout(() => window.location.reload(), 500);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenModal = (product: Product) => {
    setName(product.name);
    setPrice(product.price);
    setQuantity(product.quantity);
    setOpenModalById(product.id);
  };

  const handleCloseModal = () => {
    setOpenModalById(null);
  };

  return (
    <section className="flex gap-4 flex-wrap pb-16">
      <Toaster position="top-center" />

      {!showProducts.length && (
        <div className="flex items-center justify-center w-full h-full">
          <span className="text-2xl">Nenhum produto cadastrado!</span>
        </div>
      )}

      {showProducts.map((product: Product) => (
        <div
          className="bg-slate-50 drop-shadow-lg w-fit p-4 rounded-xl border-2 border-slate-100 gap-2 flex flex-col"
          key={product.id}
        >
          <div className="w-full items-center justify-between flex">
            <div
              onClick={() => handleDeleteProduct(product.id)}
              className="flex gap-2 items-center cursor-pointer"
            >
              <Trash className="w-4 h-4" />
              <span>Excluir</span>
            </div>
            <div
              onClick={() => handleOpenModal(product)}
              className="flex gap-2 items-center cursor-pointer"
            >
              <Pencil className="w-4 h-4" />
              <span>Editar</span>
            </div>

            <Modal
              className="flex items-center justify-center border-none outline-none"
              open={openModalById === product.id}
              onClose={handleCloseModal}
            >
              <form
                className="bg-primaryColor p-6 rounded-lg text-white flex flex-col gap-4"
                onSubmit={(e) => e.preventDefault()}
              >
                <h1 className="text-2xl">Editar produto</h1>
                <div className="flex flex-col gap-1">
                  <label htmlFor="name">Nome</label>
                  <input
                    onChange={handleChangeName}
                    className="bg-transparent border border-white rounded-md py-2 px-4 placeholder:text-white"
                    type="text"
                    placeholder="Nome do produto"
                    value={name}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label htmlFor="price">Preço</label>
                  <input
                    onChange={handleChangePrice}
                    className="bg-transparent border border-white rounded-md py-2 px-4 placeholder:text-white"
                    type="number"
                    placeholder="Preço do produto"
                    value={price}
                  />
                </div>

                <button
                  className="bg-black/80 hover:bg-black/60 text-white px-4 py-2 rounded-lg"
                  onClick={() => handleEditProduct(product.id)}
                >
                  Editar
                </button>
              </form>
            </Modal>
          </div>
          <div className="flex justify-center object-cover">
            <Image
              className="rounded-xl object-cover flex"
              src={product.image || "/images/hamburguer.jpeg"}
              alt={product.name}
              width={150}
              height={200}
            />
          </div>
          <p>{product.name}</p>
          <div className="flex items-center gap-4">
            <span className="bg-primaryColor px-2 rounded-lg text-white">
              {`R$ ${product.price}`}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => handleRemoveQuantity(product.id)}
                className="bg-black/80 text-white px-2 rounded-lg"
              >
                -
              </button>
              <span>{quantities[product.id] || 0}</span>
              <button
                onClick={() => handleAddQuantity(product.id)}
                className="bg-black/80 text-white px-2 rounded-lg"
              >
                +
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};
