import { useMutation, useQueryClient } from "@tanstack/react-query";

type Args = {
  data: {
    guestId: number;
    productId: number;
  };
};

export const useIncreaseGuestCart = () => {
  const queryClient = useQueryClient();

  const { mutateAsync, ...rest } = useMutation({
    mutationFn: async ({ data }: Args) => {
        console.log(data)
      await new Promise((resolve) => setTimeout(resolve, 1000));
    },
    onSettled: () => {
        queryClient.invalidateQueries({ queryKey: ["room_order"] });
    }
  });

  return {
    increaseGuestCart: mutateAsync,
    ...rest,
  };
};
