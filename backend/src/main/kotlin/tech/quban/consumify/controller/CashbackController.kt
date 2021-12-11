package tech.quban.consumify.controller

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.responses.ApiResponse
import org.springframework.http.ResponseEntity
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import tech.quban.consumify.dto.DefaultCashbackDto


@RestController
@RequestMapping("/cashback")
class CashbackController {

    @GetMapping
    @Operation(
        description = "Returns default cashback list."
    )
    fun getDefaultCashbackList(): ResponseEntity<List<DefaultCashbackDto>> = ResponseEntity.ok(emptyList())

    @GetMapping("/partners/{userID}")
    @Operation(
        description = "Returns cashback list for partners cashback offers."
    )
    @ApiResponse(
        responseCode = "200",
        description = "Example response description"
    )
    fun getPartnersCashbackList(@PathVariable userID: Int): String {
        return "Hello"

        // title
        // mcc
        // percent
    }

    @GetMapping("/bank/{userID}")
    @Operation(
        description = "Returns cashback list for increased cashback subscription"
    )
    @ApiResponse(responseCode = "200", description = "Example response description")
    fun getBankCashbackList(@PathVariable userID: Int): String {
        return "Hello"
    }

}