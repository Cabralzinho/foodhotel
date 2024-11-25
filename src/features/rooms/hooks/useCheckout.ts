import { api } from "@/libs/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCheckout = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (args: Args) => {
      const response = await api.post(`/rooms/${args.data.id}/checkout`);

      return response.data;
    },
    onSuccess: (_, args) => {
      args.onSucess?.();
      toast.success("Checkout realizado com sucesso");

      queryClient.invalidateQueries({
        queryKey: ["guests", args.data.guestId],
      });
    },
    onError: () => {
      toast.error("Algo deu errado na hora de realizar o checkout");
    },
  });
};

type IData = {
  id: number;
  guestId: number
};

type Args = {
  onSucess?: () => void;
  data: IData;
};
