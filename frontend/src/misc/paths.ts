export const PATHS = {
    HOME: '/consumify',
    LOGIN: '/consumify/login',
    CATALOG: '/consumify/catalog',
    PROFILE: '/consumify/profile',
    PRODUCT: (product_id: number) => `/consumify/product/${product_id}`,
}

export const DISPLAY_NONE = {
    display: 'none'
}