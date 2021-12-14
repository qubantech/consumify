package tech.quban.consumify.entity

import java.util.*
import javax.persistence.*

@Entity
data class CategoryCashbackSubscription(
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    val id: Long?,
    @ManyToOne
    val categoryCashback: CategoryCashback,
    val subscribedUntil: Date
)
