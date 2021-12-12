package tech.quban.consumify.repository

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.web.bind.annotation.RestController
import tech.quban.consumify.entity.Product

@RestController
interface ProductRepository : JpaRepository<Product, Long> {
}