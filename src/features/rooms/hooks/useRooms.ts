import { api } from "@/libs/api";
import { IProduct } from "@/types/products";
import { IRoom } from "@/types/rooms";
import { useQuery } from "@tanstack/react-query";

export const useRooms = () => {
  return useQuery<IRoom[]>({
    queryFn: async () => {
      const response = await api.get("/rooms");

      return response.data;
    },
    queryKey: ["rooms"],
    staleTime: Infinity,
    refetchInterval: 1000 * 60 * 2,
  });
};
