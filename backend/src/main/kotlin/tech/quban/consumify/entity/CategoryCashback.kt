package tech.quban.consumify.entity

import java.math.BigDecimal
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.ManyToOne

@Entity(name = "category_cashbacks")
data class CategoryCashback(
    @Id val id: Long,
    @ManyToOne
    val category: Category,
    val percent: BigDecimal,
    val description: String
)
