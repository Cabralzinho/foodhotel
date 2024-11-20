import { useProducts } from "@/features/products/hooks/useProducts";
import { Button } from "@mui/material";
import Image from "next/image";
import { useIncreaseGuestCart } from "../hooks/useIncreaseGuestCart";

export const GuestStore = () => {
  const { products } = useProducts();
  
  const { increaseGuestCart } = useIncreaseGuestCart();

  return (
    <ul className="divide-y divide-zinc-300">
      {products?.map((product) => (
        <li key={product.id} className="flex gap-4 py-4">
          <div className="h-12 w-12 rounded-md bg-primaryColor shrink-0">
            <Image
              className="h-full w-full object-cover"
              src={product.image || "/images/hamburguer.jpeg"}
              alt={product.name}
              width={48}
              height={48}
            />
          </div>
          <div className="w-full">
            <h2 className="font-bold">{product.name}</h2>
            <p className="text-sm opacity-50">
              {product.description}
            </p>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <b className="text-primaryColor">R$ {product.price}</b>
            <Button
              onClick={() =>
                increaseGuestCart({
                  data: { guestId: 1, productId: product.id },
                })
              }
              size="small"
              variant="contained"
            >
              Adicionar
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};
