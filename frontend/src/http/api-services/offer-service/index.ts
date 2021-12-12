import { $api, ENDPOINTS } from "../../index";
import { OfferModel } from "../../models/offer-models/offer-model";


const OfferService = () => {
    const getOffers = async (userID: number, productID: number) => {
        let response = await $api.get<Array<OfferModel>>(
            ENDPOINTS.GET_AUTH_OFFER(userID, productID)
        )
        return {
            status: response.status,
            data: response.data
        }
    }
    return { getOffers }
}

export const checkService = OfferService()