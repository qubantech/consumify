package tech.quban.consumify.dto

import java.math.BigDecimal

data class RecommendationDto (
    val title: String,
    val cashbackAmount: BigDecimal,
    val offers: List<OfferDto>
)
