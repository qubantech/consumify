package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema
import java.math.BigDecimal

@Schema(name = "AvailableSubscription")
data class AvailableSubscriptionDto(
    val category: String,
    val percent: BigDecimal,
    val price: BigDecimal
)
