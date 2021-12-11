package tech.quban.consumify.controller

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.responses.ApiResponse
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.*
import tech.quban.consumify.dto.CategoryCashbackSubscriptionDto
import tech.quban.consumify.dto.DefaultCashbackDto
import tech.quban.consumify.dto.SellerCashbackDto
import tech.quban.consumify.entity.CategoryCashbackSubscription
import tech.quban.consumify.mapper.toCashbackDto
import tech.quban.consumify.mapper.toCategoryCashbackSubscriptionDto
import tech.quban.consumify.mapper.toSellerCashbackDto
import tech.quban.consumify.repository.CategoryCashbackRepository
import tech.quban.consumify.repository.CategoryCashbackSubscriptionRepository
import tech.quban.consumify.repository.DefaultCashbackRepository
import tech.quban.consumify.repository.UserRepository
import java.util.*
import java.util.stream.Collectors


@RestController
@RequestMapping("/cashback")
class CashbackController(
    val userRepository: UserRepository,
    val defaultCashbackRepository: DefaultCashbackRepository,
    val categoryCashbackRepository: CategoryCashbackRepository,
    val categoryCashbackSubscriptionRepository: CategoryCashbackSubscriptionRepository
) {

    @GetMapping
    @Operation(
        description = "Returns default cashback list."
    )
    @ApiResponse(responseCode = "200")
    fun getDefaultCashbackList(): List<DefaultCashbackDto> = defaultCashbackRepository
        .findAll()
        .stream()
        .map { it.toCashbackDto() }
        .collect(Collectors.toList())


    @GetMapping("/{userId}/seller")
    @Operation(
        description = "Returns cashback list for partners cashback offers."
    )
    @ApiResponse(responseCode = "200")
    fun getSellerCashbackList(@PathVariable userId: Long): List<SellerCashbackDto> = userRepository
        .findById(userId)
        .get()
        .sellerCashbacks
        .stream()
        .map { it.toSellerCashbackDto() }
        .collect(Collectors.toList())


    @GetMapping("/{userId}/category")
    @Operation(
        description = "Returns cashback list for increased cashback subscription."
    )
    @ApiResponse(responseCode = "200")
    fun getCategoryCashbackList(@PathVariable userId: Long): List<CategoryCashbackSubscriptionDto> = userRepository
        .findById(userId)
        .get()
        .categoryCashbackSubscriptions
        .stream()
        .map { it.toCategoryCashbackSubscriptionDto() }
        .collect(Collectors.toList())


    @PostMapping("/{userId}/category/{categoryId}")
    @Operation(
        description = "Makes subscription on cashback category"
    )
    @ApiResponse(responseCode = "200")
    fun makeSubscription(@PathVariable userId: Long, @PathVariable categoryId: Long): ResponseEntity<Any> {
        val user = userRepository.getById(userId)
        if (user.categoryCashbackSubscriptions.any { it.categoryCashback.category.id == categoryId })
            return ResponseEntity.badRequest().build()

        val categoryCashback = categoryCashbackRepository.getById(categoryId)

        val cashbackSubscription = CategoryCashbackSubscription(
            id = null,
            categoryCashback = categoryCashback,
            subscribedUntil = Date(Date().time + 30L * 24L * 60L * 60L * 1000L)
        )

        categoryCashbackSubscriptionRepository.save(cashbackSubscription)
        user.categoryCashbackSubscriptions.add(cashbackSubscription)
        userRepository.save(user)
        return ResponseEntity.ok().build()
    }


    @DeleteMapping("/{userId}/category/{categoryId}")
    @Operation(
        description = "Cancels subscription on cashback category"
    )
    @ApiResponse(responseCode = "200")
    fun cancelSubscription(@PathVariable userId: Long, @PathVariable categoryId: Long): ResponseEntity<Any> {
        val user = userRepository.getById(userId)

        val categoryCashbackSubscriptionToDelete = user.categoryCashbackSubscriptions
            .first { it.categoryCashback.category.id == categoryId }

        user.categoryCashbackSubscriptions.removeIf { it.categoryCashback.category.id == categoryId }

        categoryCashbackSubscriptionRepository.delete(categoryCashbackSubscriptionToDelete)

        userRepository.save(user)
        return ResponseEntity.ok().build()
    }

}