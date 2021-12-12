import { $api, ENDPOINTS } from "../.."
import { CategoryCashbackSubscriptionModel, DefaultCashbackModel, SellerCashbackModel } from "../../models"


const CashbackService = () => {

    const getDefaultCashbackList = async () => {
        let response = await $api.get<Array<DefaultCashbackModel>>(
            ENDPOINTS.DEFAULT_CASHBACK()
        )
        return {
            status: response.status,
            data: response.data
        }
    }

    const getSellerCashbackList = async (userId: number) => {
        let response = await $api.get<Array<SellerCashbackModel>>(
            ENDPOINTS.SELLER_CASHBACK(userId)
        )
        return {
            status: response.status,
            data: response.data
        }
    }

    const getCategoryCashbackList = async (userId: number) => {
        let response = await $api.get<Array<CategoryCashbackSubscriptionModel>>(
            ENDPOINTS.CATEGORY_CASHBACK(userId)
        )
        return {
            status: response.status,
            data: response.data
        }
    }

    const makeSubscription = async (userId: number, categoryId: number) => {
        let response = await $api.post<string>(
            ENDPOINTS.CATEGORY_CASHBACK(userId) + `/${categoryId}`
        )
        return {
            status: response.status,
            data: response.data
        }
    }

    const cancelSubscription = async (userId: number, subscriptionId: number) => {
        let response = await $api.delete<string>(
            ENDPOINTS.CATEGORY_CASHBACK(userId) + `/${subscriptionId}`
        )
        return {
            status: response.status,
            data: response.data
        }
    }

    return {
        getDefaultCashbackList,
        getSellerCashbackList,
        getCategoryCashbackList,
        makeSubscription,
        cancelSubscription,
    }

}

export const cashbackService = CashbackService()