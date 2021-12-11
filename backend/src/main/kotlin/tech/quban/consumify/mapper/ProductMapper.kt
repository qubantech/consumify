package tech.quban.consumify.mapper

import tech.quban.consumify.dto.ProductDto
import tech.quban.consumify.entity.Product

fun Product.toProductDto() = ProductDto(
    id = id,
    name = name
)