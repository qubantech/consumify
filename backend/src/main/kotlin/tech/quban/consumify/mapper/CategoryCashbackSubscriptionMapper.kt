package tech.quban.consumify.mapper

import tech.quban.consumify.dto.CategoryCashbackSubscriptionDto
import tech.quban.consumify.entity.CategoryCashbackSubscription

fun CategoryCashbackSubscription.toCategoryCashbackSubscriptionDto() = CategoryCashbackSubscriptionDto(
    id = id ?: 0,
    categoryCashback = categoryCashback.toCategoryCashbackDto(),
    subscribedUntil = subscribedUntil.time
)