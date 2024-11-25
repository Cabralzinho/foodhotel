import { api } from "@/libs/api";
import { useQuery } from "@tanstack/react-query";

type Config = {
    id: number
}

export const useGuest = (config: Config) => {
  const { data: guest, ...rest } = useQuery({
    queryFn: async () => {
     const response = await api.get(`/guests/${config.id}`);

     return response.data;
    },
    queryKey: ["guests", config.id],
    staleTime: Infinity,
    refetchInterval: 1000 * 60 * 2,
  });

  return {
    guest,
    ...rest,
  };
};