package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema


@Schema(name = "PartnersCashback")
data class PartnersCashbackDto (
    val seller: String,
    val cashback: CashbackDto
)
