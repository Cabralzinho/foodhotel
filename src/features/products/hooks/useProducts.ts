import { api } from "@/libs/api";
import { IProduct } from "@/types/products";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  const { data: products, ...rest } = useQuery<IProduct[]>({
    queryFn: async () => {
      const response = await api.get("/products");

      return response.data;
    },
    queryKey: ["products"],
    staleTime: Infinity,
    refetchInterval: 1000 * 60 * 2,
  });

  return {
    products,
    ...rest
  }
};
