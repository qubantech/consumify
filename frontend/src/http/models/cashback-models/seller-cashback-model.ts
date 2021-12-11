import { SellerModel } from "./seller-model";

export interface SellerCashbackModel {
    seller: SellerModel,
    percent: number,
    description: string,
}