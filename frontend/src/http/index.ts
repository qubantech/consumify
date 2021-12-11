import axios from 'axios'


export const API_URL = 'https://api.quban.tech/'

export const ENDPOINTS = {
    DEFAULT_CASHBACK: (user_id: number) => API_URL + `cashback/${user_id}`,
    SELLER_CASHBACK: (user_id: number) => API_URL + `cashback/${user_id}/seller`,
    CATEGORY_CASHBACK: (user_id: number) => API_URL + `cashback/${user_id}/category`,
}

const baseConfig = {
    withCredentials: true,
    baseURL: API_URL,
}

export const $api = axios.create(baseConfig)