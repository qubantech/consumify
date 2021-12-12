package tech.quban.consumify.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import tech.quban.consumify.metrix.MetrixService
import tech.quban.consumify.repository.UserCategoryMoneyRepository
import tech.quban.consumify.repository.UserProductMoneyRepository
import java.util.*

@RestController
@RequestMapping("/test")
class TestController(
    userCategoryMoneyRepository: UserCategoryMoneyRepository,
    userProductMoneyRepository: UserProductMoneyRepository,
    val metrixService: MetrixService
) {
    //    private val metrixService: MetrixService = MetrixService()
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


    @GetMapping("/ucm")
    fun testFunc() = userCategoryMoneyMap

    @GetMapping("/user/{userId}")
    fun t(@PathVariable userId: Long) {
//        System.out.printf(
//            "\n\n\t\tRECOMMENDATION BY PRODUCTS:" + metrixService.makeRecommendationByProduct(userId, userProductMoneyMap, 8, 16)
//                .toString() + "\n\n"
//        )

//        System.out.printf(
//            "\n\n\t\tRECOMMENDATION BY CATEGORY:" + metrixService.makeRecommendationByCategory(userId, userCategoryMoneyMap, 8, 16)
//                .toString() + "\n\n"
//        )
    }
}