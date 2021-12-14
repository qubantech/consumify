import {Product} from "../check-models/product";
import {Sellers} from "./sellers";

export interface ProductsList {
    product: Product,
    offers: Sellers[]
}