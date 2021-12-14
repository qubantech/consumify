package tech.quban.consumify.entity

import java.math.BigDecimal
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.IdClass

@Entity
@IdClass(UserCategoryKey::class)
data class UserCategoryMoney(
    @Id val user_id: Long,
    @Id val category_id: Long,
    val money: BigDecimal
)
