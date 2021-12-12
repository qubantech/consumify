import {$api, ENDPOINTS} from "../../index";
import {Sellers} from "../../models/recommend-models/sellers";
import {Product} from "../../models/check-models/product";
import {ProductsList} from "../../models/recommend-models/products-list";

const Recommend = () => {

    const getAuthRecommend = async (user_id: number, product_id: number) => {
        let response = await $api.get<Sellers>(
            ENDPOINTS.GET_AUTH_OFFER(user_id, product_id)
        )
        return {
            status: response.status,
            data: response.data
        }
    }

    const getRecommend = async (user_id: number) => {
        let response = await $api.get<ProductsList[]>(
            ENDPOINTS.GET_RECOMMEND(user_id)
        )
        return {
            status: response.status,
            data: response.data
        }
    }

    const getProduct = async (product_id: number) => {
        let response = await $api.get<Product>(
            ENDPOINTS.GET_PRODUCT(product_id)
        )
        return {
            status: response.status,
            data: response.data
        }
    }
    return {getAuthRecommend, getProduct, getRecommend}
}

export const recommendService = Recommend()