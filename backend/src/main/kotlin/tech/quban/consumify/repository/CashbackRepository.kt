package tech.quban.consumify.repository;

import org.springframework.data.jpa.repository.JpaRepository
import tech.quban.consumify.entity.Cashback

interface CashbackRepository : JpaRepository<Cashback, Long> {
}