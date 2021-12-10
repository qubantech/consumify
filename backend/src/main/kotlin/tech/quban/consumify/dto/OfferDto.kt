package tech.quban.consumify.dto

import java.math.BigDecimal

data class OfferDto (
    val seller: String,
    val sellerImageUrl: String,
    val price: BigDecimal
)
