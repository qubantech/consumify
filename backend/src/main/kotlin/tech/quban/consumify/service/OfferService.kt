package tech.quban.consumify.service

interface OfferService {
    fun getOfferListByUserIdAndProductId(userId: Long, productId: Long)
}