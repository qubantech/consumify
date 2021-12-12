package tech.quban.consumify.service

import org.springframework.stereotype.Service
import tech.quban.consumify.dto.RecommendationDto

@Service
interface RecommendationService {
    fun getRecommendationListByUserId(userId: Long): List<RecommendationDto>
}