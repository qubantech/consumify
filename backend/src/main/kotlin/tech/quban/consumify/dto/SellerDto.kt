package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema

@Schema(name = "Seller")
data class SellerDto(
    val id: Long,
    val name: String,
    val imageUrl: String
)
