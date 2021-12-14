package tech.quban.consumify.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import tech.quban.consumify.entity.Check

interface CheckRepository : JpaRepository<Check, Long> {
    @Query("select c from checks c where c.user_id = ?1")
    fun getByUserId(userId: Long): List<Check>
}