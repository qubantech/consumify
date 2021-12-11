package tech.quban.consumify.mapper

import tech.quban.consumify.dto.CashbackDto
import tech.quban.consumify.dto.SellerCashbackDto
import tech.quban.consumify.entity.SellerCashback


fun SellerCashback.toSellerCashbackDto(): SellerCashbackDto = SellerCashbackDto(
    seller = seller,
    cashback = CashbackDto(
        percent = percent,
        description = description
    )
)