package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema

@Schema(name = "Category")
data class CategoryDto (
    val id: Long,
    val name: String
)
