package tech.quban.consumify.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import tech.quban.consumify.dto.RecommendationDto
import tech.quban.consumify.service.RecommendationService

@RestController
@RequestMapping("/recommendation")
class RecommendationController(
    val recommendationService: RecommendationService
) {

    @GetMapping("/{userId}")
    fun getRecommendedProducts(@PathVariable userId: Long): List<RecommendationDto> = recommendationService
        .getRecommendationListByUserId(userId)
}