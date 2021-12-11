package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema
import java.math.BigDecimal

@Schema(name = "Cashback")
data class CashbackDto (
    val percent: BigDecimal,
    val description: String
)
