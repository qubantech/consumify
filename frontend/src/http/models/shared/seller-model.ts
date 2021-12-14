import {CategoryModel} from "../cashback-models";

export interface SellerModel {
    id: number,
    name: string,
    imageUrl: string,
    category: CategoryModel
}