package tech.quban.consumify.service.impl

import org.apache.commons.lang3.tuple.MutablePair
import org.springframework.stereotype.Service
import tech.quban.consumify.dto.RecommendationDto
import tech.quban.consumify.mapper.toProductDto
import tech.quban.consumify.metrix.MetrixService
import tech.quban.consumify.repository.CategoryRepository
import tech.quban.consumify.repository.ProductRepository
import tech.quban.consumify.repository.UserCategoryMoneyRepository
import tech.quban.consumify.repository.UserProductMoneyRepository
import tech.quban.consumify.service.OfferService
import tech.quban.consumify.service.RecommendationService
import java.util.*
import kotlin.random.Random

@Service
class RecommendationServiceImpl(
    val metrixService: MetrixService,
    userProductMoneyRepository: UserProductMoneyRepository,
    userCategoryMoneyRepository: UserCategoryMoneyRepository,
    val productRepository: ProductRepository,
    val categoryRepository: CategoryRepository,
    val offerService: OfferService
) : RecommendationService {

    private val userProductMoneyMap: MutableMap<Long, MutableMap<Long, Double>> = HashMap()
    private val userCategoryMoneyMap: MutableMap<Long, MutableMap<Long, Double>> = HashMap()

    init {
        val userProductMoneyList = userProductMoneyRepository.findAll()
        for (upm in userProductMoneyList) {
            val innerMap1 = userProductMoneyMap.getOrDefault(upm.user_id, HashMap())
            innerMap1.put(upm.product_id, upm.money.toDouble())
            userProductMoneyMap.put(upm.user_id, innerMap1)
        }

        val userCategoryMoneyList = userCategoryMoneyRepository.findAll()
        for (ucm in userCategoryMoneyList) {
            val innerMap2 = userCategoryMoneyMap.getOrDefault(ucm.user_id, HashMap())
            innerMap2.put(ucm.category_id, ucm.money.toDouble())
            userCategoryMoneyMap.put(ucm.user_id, innerMap2)
        }
    }


    override fun getRecommendationListByUserId(userId: Long): List<RecommendationDto> {
        val recProductPriorityPairList = when(Random.nextInt(0, 3)) {
            0 -> metrixService.makeRecommendationByProductCos(
                userId,
                userProductMoneyMap,
                bestUsers = 4,
                bestProducts = 16
            )
                .entries
                .toList()
                .map { entry -> MutablePair(productRepository.getById(entry.value!!), entry.key) }
            1 -> metrixService.makeRecommendationByProductJakkar(
                userId,
                userProductMoneyMap,
                bestUsers = 4,
                bestProducts = 16
            )
                .entries
                .toList()
                .map { entry -> MutablePair(productRepository.getById(entry.value!!), entry.key) }
            2 -> metrixService.makeRecommendationByProductSzymkiewicz(
                userId,
                userProductMoneyMap,
                bestUsers = 4,
                bestProducts = 16
            )
                .entries
                .toList()
                .map { entry -> MutablePair(productRepository.getById(entry.value!!), entry.key) }


            else -> { null }
        }

        val sortedProductPairList = recProductPriorityPairList?.sortedBy { it.right }

        return sortedProductPairList
            ?.map { pair -> pair.left.toProductDto() }
            ?.reversed()
            ?.map { productDto ->
                RecommendationDto(
                    product = productDto,
                    offers = offerService.getOfferListByUserIdAndProductId(userId, productDto.id)
                )
            } ?: emptyList()
    }
}