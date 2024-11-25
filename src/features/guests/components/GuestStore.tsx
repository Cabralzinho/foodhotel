import { useProducts } from "@/features/products/hooks/useProducts";
import { Button, Skeleton } from "@mui/material";
import Image from "next/image";
import { useUpdateComsuption } from "../hooks/useUpdateComsuption";
import { useComsuptions } from "../hooks/useComsuptions";
import { Currency } from "@/components/Currency";
import { useParams } from "next/navigation";

export const GuestStore = () => {
  const guestId = Number(useParams().guestId);
  const { products } = useProducts();
  const { mutate: update } = useUpdateComsuption();
  const { data: comsuptions, isFetching } = useComsuptions({ guestId });

  const getNewAmount = (productId: number) => {
    const item = comsuptions?.find((item) => item.productId === productId);

    return item ? item.amount + 1 : 1;
  };

  if (!products || isFetching) {
    return (
      <div className="flex flex-col gap-4">
        {Array.from({ length: 10 }).map((_, index) => (
          <Skeleton
            key={index}
            className="w-full rounded-lg"
            height={64}
            variant="rectangular"
          />
        ))}
      </div>
    );
  }

  return (
    <ul className="divide-y divide-zinc-300">
      {products?.map((product) => (
        <li key={product.id} className="flex gap-4 py-4">
          <div className="h-16 w-16 rounded-md bg-primary shrink-0">
            <Image
              className="h-full w-full object-cover rounded-md overflow-hidden"
              src={`${product.imagePath}` || ""}
              alt={product.name}
              width={256}
              height={256}
            />
          </div>
          <div className="w-full">
            <h2 className="font-bold">{product.name}</h2>
            <p className="text-sm opacity-50">{product.description}</p>
          </div>
          <div className="flex flex-col gap-1 items-end">
            <b className="text-primary">
              <Currency value={product.price} />
            </b>
            <Button
              size="small"
              variant="contained"
              onClick={() =>
                update({
                  productId: product.id,
                  amount: getNewAmount(product.id),
                  guestId: guestId
                })
              }
            >
              Adicionar
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
};
