package tech.quban.consumify.repository;

import org.springframework.data.jpa.repository.JpaRepository
import tech.quban.consumify.entity.SellerCashback

interface SellerCashbackRepository : JpaRepository<SellerCashback, Long> {
}