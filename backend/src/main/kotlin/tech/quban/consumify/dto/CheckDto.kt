package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema


@Schema(name = "Check")
data class CheckDto(
    val id: Long,
    val seller: SellerDto,
    val positions: List<PositionDto>
)
