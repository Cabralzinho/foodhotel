"use client";

import { Button, Drawer, IconButton } from "@mui/material";
import { IoIosClose } from "react-icons/io";
import { useUpdateComsuption } from "@/features/guests/hooks/useUpdateComsuption";
import { useComsuptions } from "@/features/guests/hooks/useComsuptions";
import { Currency } from "@/components/Currency";
import { MdRemoveShoppingCart } from "react-icons/md";
import { ConsuptionsList } from "@/features/guests/components/ConsuptionsList";
import { useParams } from "next/navigation";

type CartProps = {
  onClose: () => void;
  open: boolean;
};

const Content = ({ onClose }: { onClose: () => void }) => {
  const guestId = Number(useParams().guestId);

  const { data: comsuptions } = useComsuptions({ guestId });

  return (
    <div className="h-full flex flex-col w-full">
      <div className="flex justify-between items-center border-b bg-zinc-100">
        <h2 className="text-xl font-bold px-4 pt-2">Consumos</h2>

        <IconButton onClick={onClose} size="large" color="inherit">
          <IoIosClose className="text-3xl text-red-500 cursor-pointer" />
        </IconButton>
      </div>

      <ConsuptionsList onClose={onClose} guestId={guestId} />

      <div className="flex flex-col justify-end p-4 gap-2 border-t bg-zinc-100">
        <div className="">
          <Button
            disabled={comsuptions?.length === 0}
            className="w-full"
            size="large"
            variant="contained"
          >
            Finalizar
          </Button>
        </div>
      </div>
    </div>
  );
};

export const CartDrawer = ({ onClose, open }: CartProps) => {
  return (
    <Drawer
      PaperProps={{
        className: "w-full max-w-[20rem]",
      }}
      className="w-full"
      onClose={onClose}
      anchor="right"
      open={open}
    >
      <Content onClose={onClose} />
    </Drawer>
  );
};
