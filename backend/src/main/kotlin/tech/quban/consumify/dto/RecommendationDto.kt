package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema

@Schema(name = "Recommendation")
class RecommendationDto(
    val product: ProductDto,
    val offers: List<OfferDto>
)
