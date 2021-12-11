package tech.quban.consumify.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import tech.quban.consumify.dto.CategoryDto
import tech.quban.consumify.mapper.toCategoryDto
import tech.quban.consumify.repository.CategoryRepository

@RestController
@RequestMapping("/category")
class CategoryController(
    val categoryRepository: CategoryRepository
) {
    @GetMapping
    fun getCategoryList(): List<CategoryDto> = categoryRepository.findAll().map { it.toCategoryDto() }
}