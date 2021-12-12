import axios from 'axios'


export const API_URL = 'http://api.quban.tech/'

export const ENDPOINTS = {
    DEFAULT_CASHBACK: () => API_URL + `cashback`,
    SELLER_CASHBACK: (user_id: number) => API_URL + `cashback/${user_id}/seller`,
    CATEGORY_CASHBACK: (user_id: number) => API_URL + `cashback/${user_id}/category`,
    GET_CATEGORIES: () => API_URL + `category`
}

const baseConfig = {
    withCredentials: true,
    baseURL: API_URL,
    /*headers: {
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Method": "DELETE, POST, GET, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
    }*/
}

export const $api = axios.create(baseConfig)