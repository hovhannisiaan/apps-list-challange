export type DataType = [{
    id: string,
    name: string,
    description: string,
    categories: string[],
    subscriptions: [{name: string, price: number}]
}]

export type DataItemType = {
    id: string,
    name: string,
    description: string,
    categories: string[],
    subscriptions: [{name: string, price: number}]
}