export type AppType = {
    id: string,
    name: string,
    description: string,
    categories: string[],
    subscriptions: [{name: string, price: number}]
}