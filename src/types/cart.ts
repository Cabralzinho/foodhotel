export type IItem = {
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
    items: IItem[],
    total: number
}