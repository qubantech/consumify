package tech.quban.consumify.entity

import javax.persistence.*

@Entity(name = "products")
data class Product(
    @Id
    val id: Long,
    val name: String
)
