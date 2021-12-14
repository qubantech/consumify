package tech.quban.consumify.entity

import java.math.BigDecimal
import javax.persistence.*

@Entity(name = "positions")
data class Position(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long,
    @ManyToOne
    val product: Product,
    @ManyToOne
    val check: Check,
    val cost: BigDecimal,
    val amount: Int
)
