package tech.quban.consumify.mapper

import tech.quban.consumify.dto.PositionDto
import tech.quban.consumify.entity.Position
import java.math.BigDecimal

fun Position.toPositionDto(cashbackPercent: BigDecimal) = PositionDto(
    product = product.toProductDto(),
    amount = amount,
    cost = cost,
    cashbackValue = cost * amount.toBigDecimal() * cashbackPercent * 0.01.toBigDecimal()
)