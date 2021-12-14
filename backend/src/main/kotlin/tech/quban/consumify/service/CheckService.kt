package tech.quban.consumify.service

import org.springframework.stereotype.Service
import tech.quban.consumify.dto.CheckDto

@Service
interface CheckService {
    fun getCheckListByUserId(userId: Long): List<CheckDto>
}