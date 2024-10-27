import { useMutation, useQueryClient } from "@tanstack/react-query"

type Args = {
    data: {
        guestId: number,
        productId: number
    },
}

export const useDecreaseGuestCart = () => {
    const queryClient = useQueryClient()

    const { mutateAsync, ...rest} = useMutation({
        mutationFn: async ({data}: Args) => {
            await new Promise((resolve) => setTimeout(resolve, 1000))
        },
        onSettled: () => {
            queryClient.invalidateQueries({queryKey: ["room_order"]})
        }
    })

    return {
        decreaseGuestCart: mutateAsync,
        ...rest
    }
}