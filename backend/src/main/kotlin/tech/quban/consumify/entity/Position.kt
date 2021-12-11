package tech.quban.consumify.entity

import java.math.BigDecimal
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.ManyToOne

@Entity(name = "positions")
data class Position(
    @Id val id: Long,
    @ManyToOne
    val product: Product,
    val cost: BigDecimal,
    val amount: Int
)
