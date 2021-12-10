package tech.quban.consumify.entity

import javax.persistence.*

@Entity

data class Product(
    @Id
    val id: Long,
    val name: String
)
