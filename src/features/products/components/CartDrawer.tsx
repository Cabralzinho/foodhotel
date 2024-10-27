"use client";

import { useDecreaseGuestCart } from "@/features/guest/hooks/useDecreaseGuestCart";
import { useIncreaseGuestCart } from "@/features/guest/hooks/useIncreaseGuestCart";
import { useCart } from "@/features/orders/hooks/useCart";
import { Button, Drawer } from "@mui/material";
import { IoIosClose } from "react-icons/io";

type CartProps = {
  onClose: () => void;
  open: boolean;
};

const Content = ({ onClose }: { onClose: () => void }) => {
  const { cart, isFetching } = useCart();
  const { decreaseGuestCart } = useDecreaseGuestCart();
  const { increaseGuestCart } = useIncreaseGuestCart();
  
  if (isFetching || !cart) {
    return <div className="w-80">Carregando...</div>;
  }


  return (
    <div className="w-80 h-full flex flex-col">
      <div>
        <IoIosClose
          onClick={onClose}
          className="text-3xl text-red-500 cursor-pointer"
        />

        <span className="text-lg opacity-50 px-4 pt-2">Carrinho</span>
      </div>

      <div className="divide-y divide-zinc-300 p-4 h-full overflow-y-auto">
        {cart?.items.length === 0 && (
          <span className="text-lg">O carrinho está vazio...</span>
        )}

        {cart?.items.map((item) => (
          <div className="flex flex-col gap-2 py-4" key={item.id}>
            <div className="flex justify-between gap-1">
              <div className="flex flex-col gap-2 w-full min-w-0">
                <h2 className="break-words">{`${item.amount}x ${item.name}`}</h2>
                <div className="flex gap-6 justify-between w-full min-w-[275px]">
                  <button className="hover:text-red-500 hover:opacity-100 transition-all text-black opacity-50">
                    Remover
                  </button>
                  <div className="flex items-center gap-2 ">
                    <Button
                      className="w-full min-w-8 h-4 p-0"
                      variant="contained"
                      onClick={() =>
                        decreaseGuestCart({
                          data: { productId: item.id, guestId: cart.id },
                        })
                      }
                    >
                      -
                    </Button>
                    <span>{item.amount}</span>
                    <Button
                    onClick={() => increaseGuestCart({ data: {
                      productId: item.id,
                      guestId: cart.id
                    } })}
                      className="w-full min-w-8 h-4 p-0"
                      variant="contained"
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <b className="text-sm">
                  {item.price.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </b>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col justify-end p-4 gap-2">
        <div className=" flex justify-between">
          <span>Total</span>
          <span>
            {cart?.total.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </span>
        </div>
        <div>
          {cart.items.length === 0 && (
            <Button
              disabled
              className="w-full"
              size="large"
              variant="contained"
            >
              Finalizar
            </Button>
          )}
          {cart.items.length > 0 && (
            <Button className="w-full" size="large" variant="contained">
              Finalizar
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export const CartDrawer = ({ onClose, open }: CartProps) => {
  return (
    <Drawer onClose={onClose} anchor="right" open={open}>
      <Content onClose={onClose} />
    </Drawer>
  );
};
