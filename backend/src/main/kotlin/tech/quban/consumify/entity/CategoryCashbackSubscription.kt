package tech.quban.consumify.entity

import java.util.*
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.ManyToOne

@Entity
data class CategoryCashbackSubscription(
    @Id
    val id: Long,
    @ManyToOne
    val categoryCashback: CategoryCashback,
    val subscribedUntil: Date
)
