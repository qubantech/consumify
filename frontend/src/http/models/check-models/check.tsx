import {SellerModel} from "../cashback-models";
import {Positions} from "./positions";

export interface Check {
    id:number,
    seller: SellerModel,
    positions: Positions[],
}