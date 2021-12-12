package tech.quban.consumify.entity

import java.math.BigDecimal
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.ManyToOne

@Entity(name = "seller_cashbacks")
data class SellerCashback(
    @Id val id: Long,
    @ManyToOne
    val seller: Seller,
    val percent: BigDecimal,
    val bankPercent: BigDecimal,
    val description: String
)
