package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema
import java.math.BigDecimal


@Schema(name = "Recommendation")
data class RecommendationDto (
    val title: String,
    val cashbackAmount: BigDecimal,
    val offers: List<OfferDto>
)
