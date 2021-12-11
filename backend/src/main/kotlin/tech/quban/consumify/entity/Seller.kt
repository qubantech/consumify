package tech.quban.consumify.entity

import javax.persistence.*

@Entity(name = "sellers")
data class Seller(
    @Id val id: Long,
    val name: String,
    val imageUrl: String,
    @ManyToOne
    val category: Category,

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "seller_product",
        joinColumns = [JoinColumn(name = "seller_id", referencedColumnName = "id")],
        inverseJoinColumns = [JoinColumn(name = "product_id", referencedColumnName = "id")]
    )
    val products: List<Product>
)
