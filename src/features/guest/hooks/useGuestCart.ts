import { ICart } from "@/types/cart";
import { useQuery } from "@tanstack/react-query";

export const useCart = () => {
  const { data: cart, ...rest } = useQuery<ICart | undefined>({
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return {
        id: 1,
        roomId: 11,
        items: [
          {
            id: 1,
            name: "Produto 4",
            description: "teste",
            price: 20,
            amount: 2,
          },
          {
            id: 2,
            name: "Produto 5",
            description: "teste",
            price: 20,
            amount: 2,
          },
          {
            id: 3,
            name: "Produto 4",
            description: "teste",
            price: 20,
            amount: 2,
          },
          {
            id: 4,
            name: "Produto 5",
            description: "teste",
            price: 20,
            amount: 2,
          },
        ],
        total: 160,
      };
    },
    queryKey: ["room_order"],
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 2,
  });

  return {
    cart,
    ...rest,
  };
};
