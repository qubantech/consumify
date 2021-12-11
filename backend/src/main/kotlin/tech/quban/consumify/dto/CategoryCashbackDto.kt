package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema

@Schema(name = "BankCashback")
data class CategoryCashbackDto (
    val active: Boolean,
    val category: CategoryDto,
    val cashback: CashbackDto
)
