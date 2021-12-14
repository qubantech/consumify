package tech.quban.consumify.controller

import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.PathVariable
import org.springframework.web.bind.annotation.RequestMapping
import org.springframework.web.bind.annotation.RestController
import tech.quban.consumify.dto.CheckDto
import tech.quban.consumify.service.CheckService

@RestController
@RequestMapping("/check")
class CheckController(
    val checkService: CheckService
) {

    @GetMapping("/{userId}")
    fun getCheckListByUserId(@PathVariable userId: Long): List<CheckDto> = checkService
        .getCheckListByUserId(userId)
}