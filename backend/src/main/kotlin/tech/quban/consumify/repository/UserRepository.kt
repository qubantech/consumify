package tech.quban.consumify.repository;

import org.springframework.data.jpa.repository.JpaRepository
import org.springframework.stereotype.Repository
import tech.quban.consumify.entity.User

@Repository
interface UserRepository : JpaRepository<User, Long> {
}