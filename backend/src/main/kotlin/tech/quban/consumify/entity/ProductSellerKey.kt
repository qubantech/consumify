package tech.quban.consumify.entity

import lombok.Data
import lombok.NoArgsConstructor
import java.io.Serializable

@Data
@NoArgsConstructor
class ProductSellerKey : Serializable {
    var product_id: Long = 0
    var seller_id: Long = 0
}