import { SellerModel } from "../shared/seller-model";

export interface DefaultCashbackModel {
    seller: SellerModel,
    percent: number,
    description: string
}