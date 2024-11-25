"use client";

import { Button, Skeleton, TextField } from "@mui/material";
import { useGuest } from "../hooks/useGuest";
import { FaShop } from "react-icons/fa6";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import { useCheckout } from "@/features/rooms/hooks/useCheckout";

type GuestDataProps = {
  guestId: number;
};

export const GuestData = ({ guestId }: GuestDataProps) => {
  const { guest, isFetching } = useGuest({
    id: guestId,
  });
  const { mutate: checkout, isPending } = useCheckout();

  if (isFetching || !guest) {
    return (
      <div className="flex flex-col items-center">
        <Skeleton
          variant="rectangular"
          width={100}
          height={100}
          className="overflow-hidden flex justify-center rounded-xl"
        />
        <Skeleton
          variant="rectangular"
          width={450}
          height={400}
          className="rounded-2xl overflow-hidden py-10"
        />
      </div>
    );
  }

  return (
    <section className="flex justify-center items-center w-full">
      <div className="bg-white px-5 py-10 rounded-2xl flex flex-col text-black gap-2 w-full max-w-[600px]">
        <div className="w-full flex justify-center gap-2">
          <Link
            className="bg-zinc-200 w-14 h-14 rounded-full flex items-center justify-center hover:bg-slate-300 transition-all"
            href={`/guests/${guestId}/store`}
          >
            <FaShop className="w-[20px]" />
          </Link>
        </div>
        <div className="absolute top-12 left-[50%] translate-x-[-50%]">
          <div className="bg-zinc-200 p-5 rounded-2xl border-4 drop-shadow-lg border-secondary text-primary w-28 h-28 text-center">
            <h1 className="text-6xl font-lobster">{guest.roomId}</h1>
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
            value={guest.companions || "Sem acompanhantes"}
          />
        </div>
        <div className="w-full">
          <label>Quarto/número da conta</label>
          <TextField
            className="w-full"
            id="outlined-basic"
            variant="outlined"
            value={`Quarto. ${guest.roomId}, conta: ${guest.id}`}
          />
        </div>
        {!guest.hasCheckout && (
          <Button
            disabled={isPending}
            onClick={() =>
              checkout({
                data: {
                  guestId: guest.id,
                  id: guest.roomId,
                },
              })
            }
            className="bg-red-500 mt-6"
            variant="contained"
            size="large"
          >
            Checkout
          </Button>
        )}
        {guest.hasCheckout && (
          <Button
            disabled
            className="mt-6"
            variant="contained"
            size="large"
          >
            Checkout realizado
          </Button>
        )}
      </div>
    </section>
  );
};
