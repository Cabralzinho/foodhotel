export type IItem = {
    productId: number,
    id: number,
    name: string,
    price: number,
    description: string,
    amount: number,
    image?: string
}

export type ICart = {
    id: number,
    roomId: number,
    total?: number
}