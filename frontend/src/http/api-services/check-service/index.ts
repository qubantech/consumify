import {$api, ENDPOINTS} from "../../index";
import {Check} from "../../models/check-models/check";

const CheckService = () => {

    const getCategories = async (userID:number) => {
        let response = await $api.get<Array<Check>>(
            ENDPOINTS.GET_CHECKS(userID)
        )
        return {
            status: response.status,
            data: response.data
        }
    }
    return {getCategories}
}

export const checkService = CheckService()