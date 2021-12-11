package tech.quban.consumify.entity

import javax.persistence.*

@Entity(name = "users")
data class User(
    @Id val id: Long,

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "user_sellercashback",
        joinColumns = [JoinColumn(name = "user_id", referencedColumnName = "id")],
        inverseJoinColumns = [JoinColumn(name = "cashback_id", referencedColumnName = "id")]
    )
    val sellerCashbacks: List<SellerCashback>,

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "user_categorycashback",
        joinColumns = [JoinColumn(name = "user_id", referencedColumnName = "id")],
        inverseJoinColumns = [JoinColumn(name = "cashback_id", referencedColumnName = "id")]
    )
    val categoryCashbacks: List<CategoryCashback>
)
