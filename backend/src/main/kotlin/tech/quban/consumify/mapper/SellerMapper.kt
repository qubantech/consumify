package tech.quban.consumify.mapper

import tech.quban.consumify.dto.SellerDto
import tech.quban.consumify.entity.Seller

fun Seller.toSellerDto(): SellerDto = SellerDto(
    id = id,
    name = name,
    imageUrl = imageUrl,
    category = category.toCategoryDto()
)