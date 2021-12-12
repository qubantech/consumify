package tech.quban.consumify.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import tech.quban.consumify.dto.ProductDto
import tech.quban.consumify.entity.Product
import tech.quban.consumify.mapper.toProductDto
import tech.quban.consumify.repository.ProductRepository

@RestController
@RequestMapping("/product")
class ProductController(
    val productRepository: ProductRepository
) {
    @GetMapping
    fun getProductList(): List<ProductDto> = productRepository.findAll()
        .map { it.toProductDto() }

    @GetMapping("/{productId}")
    fun getProductDetails(@PathVariable productId: Long) = productRepository.getById(productId)
}