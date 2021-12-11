package tech.quban.consumify.mapper

import tech.quban.consumify.dto.CategoryDto
import tech.quban.consumify.entity.Category

fun Category.toCategoryDto() = CategoryDto(
    id = id,
    name = name
)