package tech.quban.consumify.entity

import lombok.Data
import lombok.NoArgsConstructor
import java.io.Serializable

@Data
@NoArgsConstructor
class UserProductKey : Serializable {
    var user_id: Long = 0
    var product_id: Long = 0
}