import { SellerModel } from "./seller-model";

export interface DefaultCashbackModel {
    seller: SellerModel,
    percent: number,
    description: string
}