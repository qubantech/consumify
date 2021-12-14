import { SellerModel } from "./../shared/seller-model";

export interface SellerCashbackModel {
    seller: SellerModel,
    percent: number,
    description: string,
}