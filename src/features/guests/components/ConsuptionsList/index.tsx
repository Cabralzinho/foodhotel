import { Button, CircularProgress, Skeleton } from "@mui/material";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useComsuptions } from "../../hooks/useComsuptions";
import { Currency } from "@/components/Currency";
import { useUpdateComsuption } from "../../hooks/useUpdateComsuption";

type ConsuptionsListProps = {
  guestId: number;
  onClose: () => void;
};

export const ConsuptionsList = ({ guestId, onClose }: ConsuptionsListProps) => {
  const { data: comsuptions, isFetching } = useComsuptions({ guestId });
  const { mutate: update } = useUpdateComsuption();

  if (!comsuptions || isFetching) {
    return (
      <div className="text-center h-full flex justify-center items-center">
        <CircularProgress color="primary" />
      </div>
    );
  }

  if (comsuptions.length === 0) {
    return (
      <div className="text-center h-full flex flex-col justify-center items-center">
        <MdRemoveShoppingCart className="w-16 h-16" />
        <h2 className="font-bold text-xl uppercase mt-4">Nenhum consumo</h2>
        <p>Os items estarão visíveis após você adicionar</p>
        <Button onClick={() => onClose()} className="mt-4" variant="contained">
          Entendi
        </Button>
      </div>
    );
  }

  return (
    <div className="divide-y divide-zinc-300 p-4 h-full overflow-y-auto w-full">
      {comsuptions?.map((item) => (
        <div className="flex flex-col gap-2 py-4 w-full" key={item.productId}>
          <div className="flex justify-between gap-1 w-full">
            <div className="flex flex-col gap-2 w-full">
              <div className="flex justify-between">
                <h2 className="break-words">{`${item.amount}x ${item.name}`}</h2>
                <div className="flex justify-end">
                  <b className="">
                    <Currency value={item.amount * item.price} />
                  </b>
                </div>
              </div>
              <div className="flex gap-6 justify-between w-full">
                <button
                  onClick={() => update({ ...item, amount: 0 })}
                  className="text-red-500 opacity-100 transition-all text-xs uppercase"
                >
                  Remover
                </button>
                <div className="flex items-center gap-2">
                  <Button
                    className="w-full min-w-8 h-4 p-0"
                    variant="contained"
                    onClick={() => update({ ...item, amount: item.amount - 1 })}
                    disabled={item.amount === 1}
                  >
                    -
                  </Button>
                  <span>{item.amount}</span>
                  <Button
                    className="w-full min-w-8 h-4 p-0"
                    variant="contained"
                    onClick={() => update({ ...item, amount: item.amount + 1 })}
                  >
                    +
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
