package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema
import java.math.BigDecimal

@Schema(name = "Position")
data class PositionDto(
    val product: ProductDto,
    val amount: Int,
    val cashbackValue: BigDecimal,
    val cost: BigDecimal
)
