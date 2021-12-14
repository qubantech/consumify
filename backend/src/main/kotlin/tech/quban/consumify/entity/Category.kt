package tech.quban.consumify.entity

import javax.persistence.Entity
import javax.persistence.Id

@Entity(name = "categories")
data class Category(
    @Id val id: Long,
    val name: String
)
