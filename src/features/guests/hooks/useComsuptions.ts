import { api } from "@/libs/api";
import { IConsuption } from "@/types/consuptions";
import { useQuery } from "@tanstack/react-query";

type Config = {
  guestId: number;
};

export const useComsuptions = ({ guestId }: Config) => {
  const fetchCart = async () => {
    const response = await api.get(`/guests/${guestId}/consumptions`);

    return response.data;
  };

  return useQuery<IConsuption[]>({
    queryFn: fetchCart,
    queryKey: ["comsuptions", guestId],
    staleTime: 1000 * 60 * 5,
    refetchInterval: 1000 * 60 * 2,
  });
};
