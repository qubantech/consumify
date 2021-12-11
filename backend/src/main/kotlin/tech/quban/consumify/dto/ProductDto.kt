package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema

@Schema(name = "Product")
data class ProductDto(
    val id: Long,
    val name: String,
)
