import {$api, ENDPOINTS} from "../../index";
import {getCategory} from "../../models/category-models/category";

const CategoryService = () => {

    const getCategories = async () => {
        let response = await $api.get<Array<getCategory>>(
            ENDPOINTS.GET_CATEGORIES()
        )
        return {
            status: response.status,
            data: response.data
        }
    }
    return {getCategories}
}

export const categoryService = CategoryService()