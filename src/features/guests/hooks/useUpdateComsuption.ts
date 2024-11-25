import { api } from "@/libs/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateComsuption = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: IUpdateConsumptionData) => {
      const response = await api.post(`guests/${data.guestId}/consumptions`, data);

      return response.data;
    },
    onSettled: () => queryClient.invalidateQueries({
      queryKey: ["comsuptions"],
    }),
  });
};

type IUpdateConsumptionData = {
  guestId?: number;
  productId: number;
  amount: number;
};
