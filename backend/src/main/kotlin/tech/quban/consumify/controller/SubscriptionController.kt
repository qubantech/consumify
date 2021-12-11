package tech.quban.consumify.controller

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.responses.ApiResponse
import org.springframework.web.bind.annotation.*
import tech.quban.consumify.dto.SubscriptionStatusResponseDto

@RestController
@RequestMapping("/subscription")
class SubscriptionController {

    @GetMapping("/{userID}")
    @Operation(
        description = "Returns bank subscription status for increased cashback and subscription options."
    )
    @ApiResponse(
        responseCode = "200"
    )
    fun getSubscriptionStatus(@PathVariable userID: Int): SubscriptionStatusResponseDto? {
        return null
    }

    @PostMapping("/{userID}")
    @Operation(
        description = "Makes subscription."
    )
    @ApiResponse(
        responseCode = "200"
    )
    fun makeSubscription(
        @PathVariable userID: Int,
        @RequestParam("category_id") categoryID: String
    ): String? {
        return null
    }

    @DeleteMapping("/{userID}")
    @Operation(
        description = "Cancelling subscription."
    )
    @ApiResponse(
        responseCode = "200"
    )
    fun cancelSubscription(
        @PathVariable userID: Int,
        @RequestParam("subscription_id") categoryID: String
    ): String? {
        return null
    }

}