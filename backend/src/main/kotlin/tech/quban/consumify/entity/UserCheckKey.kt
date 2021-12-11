package tech.quban.consumify.entity

import java.io.Serializable

class UserCheckKey(
    val user_id: Long,
    val check_id: Long
) : Serializable
