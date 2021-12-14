package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema
import java.math.BigDecimal

@Schema(name = "SellerCashback")
data class SellerCashbackDto(
    val seller: SellerDto,
    val percent: BigDecimal,
    val description: String
)
