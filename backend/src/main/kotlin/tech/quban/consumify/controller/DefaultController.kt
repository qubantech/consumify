package tech.quban.consumify.controller

import io.swagger.v3.oas.annotations.Operation
import io.swagger.v3.oas.annotations.media.Content
import io.swagger.v3.oas.annotations.responses.ApiResponse
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController

@RestController
@RequestMapping("/")
class DefaultController() {

    @GetMapping
    @Operation(summary = "Example summary.", description = "Example description.")
    @ApiResponse(responseCode = "200", description = "Example response description")
    fun index(): String = "Hello!"
}