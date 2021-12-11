package tech.quban.consumify.mapper

import tech.quban.consumify.dto.SellerCashbackDto
import tech.quban.consumify.entity.SellerCashback

fun SellerCashback.toSellerCashbackDto() = SellerCashbackDto(
    seller = seller.toSellerDto(),
    percent = percent,
    description = description
)