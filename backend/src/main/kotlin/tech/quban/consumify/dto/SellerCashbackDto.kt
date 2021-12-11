package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema
import tech.quban.consumify.entity.Seller


@Schema(name = "PartnersCashback")
data class SellerCashbackDto (
    val seller: Seller,
    val cashback: CashbackDto
)
