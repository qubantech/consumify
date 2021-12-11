package tech.quban.consumify.dto

import tech.quban.consumify.entity.CategoryCashback
import java.util.*
import javax.persistence.Id
import javax.persistence.ManyToOne

data class CategoryCashbackSubscriptionDto(
    val id: Long,
    val categoryCashback: CategoryCashbackDto,
    val subscribedUntil: Long
)
