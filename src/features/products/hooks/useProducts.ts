import { api } from "@/libs/api";
import { IProduct } from "@/types/products";
import { useQuery } from "@tanstack/react-query";

export const useProducts = () => {
  const fetchProducts = async () => {
    const authToken = localStorage.getItem("authToken");

    const response = await api.get("/products", {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    return response.data;
  };

  const { data: products, ...rest } = useQuery<IProduct[]>({
    queryFn: fetchProducts,
    queryKey: ["products"],
    staleTime: Infinity,
    refetchInterval: 1000 * 60 * 2,
  });

  return {
    products,
    ...rest,
  };
};
