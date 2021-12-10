package tech.quban.consumify.entity

import java.math.BigDecimal
import javax.persistence.Entity
import javax.persistence.Id

@Entity
data class Cashback(
    @Id val id: Long,
    val percent: BigDecimal,
    val description: String
)
