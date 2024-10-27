"use client";

import { TextField } from "@mui/material";
import { useGuest } from "../hooks/useGuest";
import { FaShop } from "react-icons/fa6";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

type GuestDataProps = {
  guestId: number;
};

export const GuestData = ({ guestId }: GuestDataProps) => {
  const { guest, isFetching } = useGuest({
    id: guestId,
  });

  if (isFetching || !guest) {
    return <div>Carregando...</div>;
  }

  return (
    <section className="bg-white px-5 py-10 rounded-2xl flex flex-col text-black gap-2">
      <div className="w-full flex justify-center gap-2">
        <Link
          className="bg-zinc-200 w-10 h-10 rounded-full flex items-center justify-center"
          href={`/guest/${guestId}/store`}
        >
          <FaShop className="w-[20px]" />
        </Link>

        <Link
          className="bg-zinc-200 w-10 h-10 rounded-full flex items-center justify-center"
          href="/"
        >
          <FaShoppingCart />
        </Link>
      </div>
      <div className="absolute top-12 left-[50%] translate-x-[-50%]">
        <div className="bg-zinc-200 p-5 rounded-2xl border-4 drop-shadow-lg border-secondaryColor text-primaryColor">
          <h1 className="text-6xl font-lobster">{guest.room}</h1>
        </div>
      </div>
      <div className="w-full">
        <label>Nome do hospede</label>
        <TextField
          className="w-full"
          id="outlined-basic"
          variant="outlined"
          value={guest.name}
        />
      </div>
      <div className="w-full">
        <label>Acompanhantes</label>
        <TextField
          className="w-full"
          id="outlined-basic"
          variant="outlined"
          value={guest.companions.map((c) => c.name).join(", ")}
        />
      </div>
      <div className="w-full">
        <label>Apto/número da conta</label>
        <TextField
          className="w-full"
          id="outlined-basic"
          variant="outlined"
          value={`Apto. ${guest.room}, conta: ${guest.id}`}
        />
      </div>
    </section>
  );
};
