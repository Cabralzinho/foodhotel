"use client"

import { Header } from "./components/Header";
import { CardProduct } from "./components/CardProduct";
import { FilterProduct } from "./components/FilterProduct";
import { SearchProduct } from "./components/SearchProduct";
import { Product } from "@/app/types/ProductsType";
import { getProducts } from "@/app/functions/products";
import { useEffect, useState } from "react";

export default function Products() {
  const [showProducts, setShowProducts] = useState<Product[]>([]);

  const fetchProduct = async () => {
    const products = await getProducts();

    setShowProducts(products);

    console.log(products);
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <main className="flex flex-col gap-6 px-6 bg-white h-screen text-black">
      <Header />
      <SearchProduct />
      <FilterProduct />
      <CardProduct showProducts={showProducts}/>
    </main>
  );
}
