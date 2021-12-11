package tech.quban.consumify.entity

import lombok.Data
import lombok.NoArgsConstructor
import java.io.Serializable

@Data
@NoArgsConstructor
class UserCheckKey : Serializable {
    val user_id: Long = 0
    val check_id: Long = 0
}
