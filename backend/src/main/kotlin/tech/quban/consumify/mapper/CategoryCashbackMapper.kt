package tech.quban.consumify.mapper

import tech.quban.consumify.dto.CategoryCashbackDto
import tech.quban.consumify.entity.CategoryCashback


fun CategoryCashback.toCategoryCashbackDto() = CategoryCashbackDto(
    category = category.toCategoryDto(),
    percent = percent,
    description = description
)