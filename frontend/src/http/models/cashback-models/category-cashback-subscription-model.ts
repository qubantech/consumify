import { CategoryCashbackModel } from "./category-cashback-model";

export interface CategoryCashbackSubscriptionModel {
    id: number,
    categoryCashback: CategoryCashbackModel,
    subscribedUntil: number
}