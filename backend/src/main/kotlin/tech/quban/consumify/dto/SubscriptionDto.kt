package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema
import java.math.BigDecimal


@Schema(name = "Subscription")
data class SubscriptionDto(
    val expiration: String,
    val category: String,
    val percent: BigDecimal
)
