package tech.quban.consumify.entity

import lombok.Data
import lombok.NoArgsConstructor
import java.io.Serializable


@Data
@NoArgsConstructor
class UserCategoryKey : Serializable {
    var user_id: Long = 0
    val category_id: Long = 0
}