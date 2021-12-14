package tech.quban.consumify.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import tech.quban.consumify.entity.Check
import tech.quban.consumify.entity.Position
import tech.quban.consumify.entity.Product

interface PositionRepository : JpaRepository<Position, Long> {
    fun getByCheck(check: Check): List<Position>
    fun getByProduct(product: Product): List<Position>
}