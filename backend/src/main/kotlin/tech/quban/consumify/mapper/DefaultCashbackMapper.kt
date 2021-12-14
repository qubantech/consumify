package tech.quban.consumify.mapper

import tech.quban.consumify.dto.DefaultCashbackDto
import tech.quban.consumify.entity.DefaultCashback


fun DefaultCashback.toCashbackDto(): DefaultCashbackDto = DefaultCashbackDto(
    seller = seller.toSellerDto(),
    percent = percent,
    description = description
)