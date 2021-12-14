package tech.quban.consumify.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.data.jpa.repository.Query
import org.springframework.stereotype.Repository
import tech.quban.consumify.entity.ProductSellerPrice

@Repository
interface ProductSellerPriceRepository : JpaRepository<ProductSellerPrice, Long> {
    @Query("select p from ProductSellerPrice p where p.product_id = ?1")
    fun getByProduct_id(product_id: Long): List<ProductSellerPrice>
}