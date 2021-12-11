package tech.quban.consumify.repository

import org.springframework.data.jpa.repository.JpaRepository
import tech.quban.consumify.entity.Check
import tech.quban.consumify.entity.Position

interface PositionRepository : JpaRepository<Position, Long> {
    fun getByCheck(check: Check): List<Position>
}