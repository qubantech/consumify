package tech.quban.consumify.controller

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.responses.ApiResponse
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/subscription")
class SubscriptionController {

    @GetMapping("/{userID}")
    @Operation(
        description = "Returns default cashback list."
    )
    @ApiResponse(
        responseCode = "200",
        description = "Example response description"
    )
    fun getDefaultCashbackList(@PathVariable userID: Int): String {
        return "Hello"
    }


}