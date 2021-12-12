package tech.quban.consumify.service.impl

import org.springframework.stereotype.Service
import tech.quban.consumify.dto.OfferDto
import tech.quban.consumify.entity.CategoryCashback
import tech.quban.consumify.entity.DefaultCashback
import tech.quban.consumify.entity.SellerCashback
import tech.quban.consumify.mapper.toSellerDto
import tech.quban.consumify.repository.*
import tech.quban.consumify.service.OfferService
import java.math.BigDecimal
import java.util.*
import kotlin.collections.HashMap

@Service
class OfferServiceImpl(
    val userRepository: UserRepository,
    val defaultCashbackRepository: DefaultCashbackRepository,
    val productSellerPriceRepository: ProductSellerPriceRepository,
    val sellerRepository: SellerRepository
) : OfferService {
    override fun getOfferListByUserIdAndProductId(userId: Long, productId: Long): List<OfferDto> {
        val user = userRepository.getById(userId)
        val sellerCashbackList: List<SellerCashback> = user.sellerCashbacks
        val categoryCashbackList: List<CategoryCashback> = user.categoryCashbackSubscriptions
            .filter { it.subscribedUntil.after(Date()) }
            .map { it.categoryCashback }
        val defaultCashbackList: List<DefaultCashback> = defaultCashbackRepository.findAll()

        val sellerIdToBankBen = HashMap<Long, BigDecimal>()
        val sellerIdToCashback = HashMap<Long, BigDecimal>()

       val pspList =  productSellerPriceRepository.getByProduct_id(productId)

        pspList.forEach { psp ->
                var bankPercent = BigDecimal.ZERO
                bankPercent += defaultCashbackList
                    .find { it.seller.id == psp.seller_id }
                    ?.bankPercent
                    ?: BigDecimal.ZERO
                bankPercent += sellerCashbackList
                    .find { it.seller.id == psp.seller_id }
                    ?.bankPercent
                    ?: BigDecimal.ZERO
                sellerIdToBankBen[psp.seller_id] = psp.cost * bankPercent

                var cashPercent = BigDecimal.ZERO
                cashPercent += defaultCashbackList
                    .find { it.seller.id == psp.seller_id }
                    ?.percent
                    ?: BigDecimal.ZERO
                cashPercent += sellerCashbackList
                    .find { it.seller.id == psp.seller_id }
                    ?.percent
                    ?: BigDecimal.ZERO
                sellerIdToCashback[psp.seller_id] = psp.cost * cashPercent
            }

        val sortedSellers = sellerIdToBankBen.toList().sortedBy { it.second }

        val offerDtoList = sortedSellers.map {
            s -> OfferDto(
                seller = sellerRepository.getById(s.first).toSellerDto(),
                price = pspList.find { s.first == it.seller_id }?.cost ?: 0.0.toBigDecimal(),
                cashbackValue = (sellerIdToCashback[s.first] ?: 0.0.toBigDecimal()) * 0.01.toBigDecimal()
            )
        }

        return offerDtoList
    }
}