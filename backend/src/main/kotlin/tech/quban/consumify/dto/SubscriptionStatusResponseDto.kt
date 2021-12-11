package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema

@Schema(name = "SubscriptionStatusResponse")
data class SubscriptionStatusResponseDto(
    val subscriptions: List<SubscriptionDto>,
    val availableSubscriptions: List<AvailableSubscriptionDto>
)
