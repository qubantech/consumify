package tech.quban.consumify.entity

import javax.persistence.*

@Entity
data class User(
    @Id val id: Long,

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "user_cashback",
        joinColumns = [JoinColumn(name = "user_id", referencedColumnName = "id")],
        inverseJoinColumns = [JoinColumn(name = "cashback_id", referencedColumnName = "id")]
    )
    val personalCashback: List<Cashback>
)
