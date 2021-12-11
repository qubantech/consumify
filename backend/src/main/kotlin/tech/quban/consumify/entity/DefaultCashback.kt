package tech.quban.consumify.entity

import java.math.BigDecimal
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.ManyToOne

@Entity(name = "default_cashbacks")
data class DefaultCashback(
    @Id val id: Long,
    @ManyToOne
    val seller: Seller,
    val percent: BigDecimal,
    val description: String
)
