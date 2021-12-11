package tech.quban.consumify.entity

import java.io.Serializable

class UserProductKey(
    val user_id: Long,
    val product_id: Long
): Serializable