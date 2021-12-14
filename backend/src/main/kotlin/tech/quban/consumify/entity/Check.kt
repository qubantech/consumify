package tech.quban.consumify.entity

import javax.persistence.*

@Entity(name = "checks")
@IdClass(UserCheckKey::class)
data class Check(
    @Id val user_id: Long,
    @Id val check_id: Long,
    @ManyToOne
    val seller: Seller,
    @OneToMany(fetch = FetchType.LAZY)
    val positions: List<Position>
)
