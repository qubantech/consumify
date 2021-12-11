package tech.quban.consumify.service

import tech.quban.consumify.dto.RecommendationDto

interface RecommendationService {
    fun getRecommendationListByUserId(userId: Long): List<RecommendationDto>
}