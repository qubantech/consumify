import {CategoryModel} from "./category-model";

export interface SellerModel {
    id: number,
    name: string,
    imageUrl: string,
    category: CategoryModel
}