package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema

@Schema(name = "CategoryDto")
data class CategoryDto (
    val id: Int,
    val name: String
)
