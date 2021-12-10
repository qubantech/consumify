import axios from 'axios'


export const API_URL = 'https://api.quban.tech/'

export const ENDPOINTS = {
    PRODUCTS: (page: number, count: number) => `product?page=${page}&count=${count}`,
    PRODUCT: (product_id: string) => `product/${product_id}`,
    REVIEWS: (product_id: string) => `product/id/review`,

}

const baseConfig = {
    withCredentials: true,
    baseURL: API_URL,
};

export const $api = axios.create(baseConfig);