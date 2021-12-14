package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema
import java.math.BigDecimal

@Schema(name = "CategoryCashback")
data class CategoryCashbackDto (
    val category: CategoryDto,
    val percent: BigDecimal,
    val description: String
)
