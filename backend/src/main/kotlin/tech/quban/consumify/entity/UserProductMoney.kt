package tech.quban.consumify.entity

import java.math.BigDecimal
import javax.persistence.Entity
import javax.persistence.Id
import javax.persistence.IdClass

@Entity
@IdClass(UserProductKey::class)
data class UserProductMoney(
    @Id val user_id: Long,
    @Id val product_id: Long,
    val money: BigDecimal
)
