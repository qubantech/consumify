package tech.quban.consumify.dto

import java.math.BigDecimal

data class CashbackDto (
    val percent: BigDecimal,
    val description: String
)
