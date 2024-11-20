"use client";

import { ArrowLeft } from "@/components/Icons/ArrowLeft";
import { GuestStore } from "@/features/guest/components/GuestStore";
import { CartDrawer } from "@/features/products/components/CartDrawer";
import { Button } from "@mui/material";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GuestStorePage() {
  const [open, setOpen] = useState(false);

  const onClose = () => {
    setOpen(false);
  };

  const [authToken, setAuthToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setAuthToken(token);
  }, []);

  const isAuthenticated = async () => {
    if (!authToken) {
      return;
    }

    const response = await fetch("http://localhost:8080/products", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });

    return response.json();
  };

  isAuthenticated();

  return (
    <main className="flex flex-col gap-6 px-6 bg-white h-screen text-black">
      <div className="flex justify-between pt-2">
        <Link href={"/guest/2"}>
          <ArrowLeft className="w-5 cursor-pointer" />
        </Link>
        <Button onClick={() => setOpen(true)} variant="outlined">
          Carrinho
        </Button>
      </div>
      <GuestStore />
      <CartDrawer onClose={onClose} open={open} />
    </main>
  );
}
