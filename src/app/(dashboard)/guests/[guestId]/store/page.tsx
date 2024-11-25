"use client";

import { ArrowLeft } from "@/components/Icons/ArrowLeft";
import { GuestStore } from "@/features/guests/components/GuestStore";
import { useComsuptions } from "@/features/guests/hooks/useComsuptions";
import { CartDrawer } from "@/features/products/components/CartDrawer";
import { Button } from "@mui/material";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function GuestStorePage() {
  const guestId = Number(useParams().guestId);
  const [open, setOpen] = useState(false);
  const { data: comsuptions } = useComsuptions({ guestId });

  const onClose = () => {
    setOpen(false);
  };

  const totalItems =
    comsuptions?.reduce((acc, item) => acc + item.amount, 0) || 0;

  return (
    <main className="flex flex-col gap-6 px-6 bg-white text-black min-h-screen">
      <div className="flex items-center gap-2 relative justify-center py-5">
        <Link href={`/guests/${guestId}`} className="w-fit absolute left-0">
          <ArrowLeft className="w-[25px]" />
        </Link>
        <div className="flex flex-col items-center">
          <h2 className="text-center font-bold text-2xl">Gerencias Consumos</h2>
          {/* <p className="text-sm uppercase opacity-70">Quarto 7</p> */}
        </div>
      </div>
      <div className="flex justify-end">
        <Button
          className="w-fit"
          onClick={() => setOpen(true)}
          variant="outlined"
        >
          Consumos({totalItems})
        </Button>
      </div>
      <GuestStore />
      <CartDrawer onClose={onClose} open={open} />
    </main>
  );
}
