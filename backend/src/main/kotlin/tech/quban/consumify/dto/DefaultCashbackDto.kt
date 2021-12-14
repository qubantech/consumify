package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema
import java.math.BigDecimal

@Schema(name = "DefaultCashback")
data class DefaultCashbackDto (
    val seller: SellerDto,
    val percent: BigDecimal,
    val description: String
)
