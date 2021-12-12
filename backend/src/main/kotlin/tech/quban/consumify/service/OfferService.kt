package tech.quban.consumify.service

import org.springframework.stereotype.Service
import tech.quban.consumify.dto.OfferDto

@Service
interface OfferService {
    fun getOfferListByUserIdAndProductId(userId: Long, productId: Long): List<OfferDto>
}