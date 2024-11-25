import { api } from "@/libs/api";
import { Iguest } from "@/types/guest";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export const useAddGuest = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: async (data: IData) => {
      const response = await api.post("guests", data);

      return response.data as Iguest;
    },
    onSuccess: (data) => {
      toast.success("Convidado adicionado com sucesso");
      router.push(`/guests/${data.id}`);
    },
    onSettled: () => queryClient.invalidateQueries({
      queryKey: ["rooms"],
    }),
  });
};

type IData = {
  roomId: number;
  name: string;
  companions: string;
};
