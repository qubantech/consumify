import axios from 'axios'


export const API_URL = 'http://api.quban.tech/'

export const ENDPOINTS = {
    DEFAULT_CASHBACK: () => API_URL + `cashback`,
    SELLER_CASHBACK: (user_id: number) => API_URL + `cashback/${user_id}/seller`,
    CATEGORY_CASHBACK: (user_id: number) => API_URL + `cashback/${user_id}/category`,
    GET_CATEGORIES: () => API_URL + `category`,
    GET_CHECKS: (user_id: number) => API_URL+`check/${user_id}`,
    GET_AUTH_OFFER: (user_id: number, product_id:number) => API_URL+`offer/${user_id}/${product_id}`,
    GET_NOAUTH_OFFER: (product_id: number) => API_URL+`offer/anonymous/${product_id}`,
    GET_PRODUCT: (product_id:number) => API_URL+`product/${product_id}`,
    GET_RECOMMEND: (user_id:number)=>API_URL+`recommendation/${user_id}`
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