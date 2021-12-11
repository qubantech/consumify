package tech.quban.consumify.mapper

import tech.quban.consumify.dto.CashbackDto
import tech.quban.consumify.entity.DefaultCashback


fun DefaultCashback.toCashbackDto(): CashbackDto = CashbackDto(
    percent = percent,
    description = description
)