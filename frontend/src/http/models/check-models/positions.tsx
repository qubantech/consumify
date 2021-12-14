import {Product} from "./product";

export interface Positions {
    product: Product,
    amount: number,
    cashbackValue: number,
    cost: number
}