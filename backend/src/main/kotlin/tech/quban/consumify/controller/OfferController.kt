package tech.quban.consumify.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import tech.quban.consumify.service.OfferService

@RestController
@RequestMapping("/offer")
class OfferController(
    val offerService: OfferService
) {
    @GetMapping("/{userId}/{productId}")
    fun getOfferListByUserIdAndProductId(@PathVariable userId: Long, @PathVariable productId: Long) = offerService
        .getOfferListByUserIdAndProductId(userId, productId)

    @GetMapping("/anonymous/{productId}")
    fun getOfferListByUserIdAndProductId(@PathVariable productId: Long) = offerService
        .getOfferListByProductId(productId)
}