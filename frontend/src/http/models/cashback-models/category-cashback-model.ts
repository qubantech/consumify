import { CategoryModel } from "./category-model";

export interface CategoryCashbackModel {
    category: CategoryModel,
    percent: number,
    description: string
}