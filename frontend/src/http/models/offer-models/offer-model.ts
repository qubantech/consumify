import { SellerModel } from "../shared/seller-model";

export interface OfferModel {
    seller: SellerModel,
    price: number,
    cashbackValue: number,
}