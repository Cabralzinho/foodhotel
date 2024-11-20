import { useQuery } from "@tanstack/react-query";

type Config = {
    id: number
}

export const useGuest = (config: Config) => {
  const { data: guest, ...rest } = useQuery({
    queryFn: async () => {
      return {
            id: 1,
            name: "Sophia salgado",
            companions: [
                {
                    id: 1,
                    name: "Ezequiel Santos",
                },
                {
                    id: 2,
                    name: "Pedro Visage",
                }
            ],
            room: 69,
        }
    },
    queryKey: ["guest", config.id],
    staleTime: Infinity,
    refetchInterval: 1000 * 60 * 2,
  });

  return {
    guest,
    ...rest,
  };
};