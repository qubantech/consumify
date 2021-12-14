export interface CardInterface {
    name: string,
    id: number,
    total: string,
    cashback: number,
    partner: boolean,
    price: number,
}

export interface FilterInterface {
    label:string,
    value:string
}