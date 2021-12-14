package tech.quban.consumify.service.impl

import org.springframework.cache.annotation.CacheEvict
import org.springframework.stereotype.Service
import tech.quban.consumify.dto.CheckDto
import tech.quban.consumify.entity.CategoryCashback
import tech.quban.consumify.entity.DefaultCashback
import tech.quban.consumify.entity.SellerCashback
import tech.quban.consumify.mapper.toPositionDto
import tech.quban.consumify.mapper.toSellerDto
import tech.quban.consumify.repository.*
import tech.quban.consumify.service.CheckService
import java.math.BigDecimal
import java.util.*

@Service
class CheckServiceImpl(
    val userRepository: UserRepository,
    val defaultCashbackRepository: DefaultCashbackRepository,
    val checkRepository: CheckRepository
) : CheckService {
    override fun getCheckListByUserId(userId: Long): List<CheckDto> {
        val user = userRepository.getById(userId)
        val sellerCashbackList: List<SellerCashback> = user.sellerCashbacks
        val categoryCashbackList: List<CategoryCashback> = user.categoryCashbackSubscriptions
            .filter { it.subscribedUntil.after(Date()) }
            .map { it.categoryCashback }
        val defaultCashbackList: List<DefaultCashback> = defaultCashbackRepository.findAll()

        return checkRepository
            .getByUserId(userId)
            .map { check ->
                var percent = BigDecimal.ZERO
                percent += defaultCashbackList
                    .find { it.seller.id == check.seller.id }
                    ?.percent
                    ?: BigDecimal.ZERO
                percent += sellerCashbackList
                    .find { it.seller.id == check.seller.id }
                    ?.percent
                    ?: BigDecimal.ZERO
                percent += categoryCashbackList
                    .find { it.category.id == check.seller.category.id }
                    ?.percent
                    ?: BigDecimal.ZERO
                CheckDto(
                    id = check.check_id,
                    seller = check.seller.toSellerDto(),
                    positions = check.positions
                        .map { it.toPositionDto(percent) }
                )
            }
    }
}