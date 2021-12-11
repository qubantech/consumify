export interface CardInterface {
    name: string,
    id: number,
    total: number,
    cashback: number,
    partner: boolean,
    price: number,
}

export interface FilterInterface {
    label:string,
    value:string
}