package tech.quban.consumify.entity

import java.math.BigDecimal
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.IdClass

@Entity
@IdClass(ProductSellerKey::class)
data class ProductSellerPrice(
    @Id val product_id: Long,
    @Id val seller_id: Long,
    val cost: BigDecimal
)
