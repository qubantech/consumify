package tech.quban.consumify.dto

import io.swagger.v3.oas.annotations.media.Schema
import java.math.BigDecimal


@Schema(name = "Offer")
data class OfferDto (
    val seller: SellerDto,
    val price: BigDecimal,
    val cashbackValue: BigDecimal
)
