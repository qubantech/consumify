package tech.quban.consumify.entity

import javax.persistence.*

@Entity
data class Seller(
    @Id val id: Long,
    val name: Long,
    val imageUrl: String,

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "seller_product",
        joinColumns = [JoinColumn(name = "seller_id", referencedColumnName = "id")],
        inverseJoinColumns = [JoinColumn(name = "product_id", referencedColumnName = "id")]
    )
    val products: List<Product>
)
