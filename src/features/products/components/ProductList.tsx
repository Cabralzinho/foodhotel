"use client";

import { Button } from "@mui/material";
import { useProducts } from "../hooks/useProducts";
import Image from "next/image";

export const ProductList = () => {
  const { products } = useProducts();

  return (
    <ul className="divide-y divide-zinc-300">
      {products?.map((product) => (
        <li key={product.id} className="flex gap-4 py-4">
          <div className="h-12 w-12 rounded-md bg-primary shrink-0">
            <Image className="h-full w-full object-cover" src={product.imagePath || ""} alt={product.name} width={48} height={48} />
          </div>
          <div className="w-full">
            <h2 className="font-bold">{product.name}</h2>
            <p className="text-sm opacity-50">
              {product.description}
            </p>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <b className="text-primary">R$ {product.price}</b>
            <Button size="small" variant="contained">
              Adicionar
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};
