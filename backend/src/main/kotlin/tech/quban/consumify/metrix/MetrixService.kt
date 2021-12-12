package tech.quban.consumify.metrix

import org.apache.commons.lang3.math.NumberUtils
import org.springframework.stereotype.Service
import java.util.*

@Service
class MetrixService {
    fun getSameElementsAmount(a: Map<Long?, Double?>, b: Map<Long?, Double?>?): Int {
        var s = 0
        for (key in a.keys) {
            if (b != null) {
                if (b.containsKey(key)) {
                    s++
                }
            }
        }
        return s
    }

    /*
    Couple of users only
    a,b = Map<idProduct, overallPrice>
     */
    private fun distanceCos(a: MutableMap<Long, Double>?, b: MutableMap<Long, Double>?): Double {
        var a_b = 0.0
        var a_a = 0.0
        var b_b = 0.0
        for (key in a!!.keys) {
            if (b!!.containsKey(key)) {
                a_b += a[key]!! * b[key]!!
                a_a += a[key]!! * a[key]!!
                b_b += b[key]!! * b[key]!!
            }
        }
        return a_b / Math.sqrt(a_a) / Math.sqrt(b_b)
    }

    private fun SzymkiewiczSimpsonCoefficent(a: Map<Long?, Double?>, b: Map<Long?, Double?>): Double {
        val c = getSameElementsAmount(a, b)
        return (c / NumberUtils.min(a.values.size, b.values.size)).toDouble()
    }

    private fun JakkarCoefficent(a: Map<Long?, Double?>, b: Map<Long?, Double?>): Double {
        val c = getSameElementsAmount(a, b)
        return (c / (a.values.size + b.values.size - c)).toDouble()
    }

    /*
    purchases: Map<user_id,
                            Map<product_id, overall_product_price>
                  >
     */
    fun makeRecommendationByProduct(
        userId: Long,
        purchases: MutableMap<Long, MutableMap<Long, Double>>,
        bestUsers: Int,
        bestProducts: Int
    ): TreeMap<Long?, Double?> {
        val matchesWithUser = TreeMap<Double, Long>()

        for (entry in purchases.entries) {
            if (entry.key != userId)
                matchesWithUser.put(distanceCos(purchases[userId]!!, entry.value), entry.key)
        }

        // get most matching users
        var bestMatchesWithUser = matchesWithUser.entries.stream()
            .limit(bestUsers.toLong())
            .collect(
                { TreeMap() },
                { m: TreeMap<Double, Long>, e: Map.Entry<Double, Long> ->
                    m.put(
                        e.key,
                        e.value
                    )
                }) { obj: TreeMap<Double, Long>, m: TreeMap<Double, Long>? ->
                obj.putAll(
                    m!!
                )
            }
//        System.out.printf(bestMatchesWithUser.toString())

        // sim: id_product, overall_price
        val sim: TreeMap<Long?, Double?> = TreeMap()
        var sim_all = 0.0
        for (matchValue in bestMatchesWithUser.keys) {
            sim_all += bestMatchesWithUser[matchValue]!!
        }
        val newBestMatchesWithUser = bestMatchesWithUser
        for (matchValue in bestMatchesWithUser.keys) {
            if (matchValue < 0.01)
                newBestMatchesWithUser.remove(matchValue)

        }

        bestMatchesWithUser = newBestMatchesWithUser
        for (user in bestMatchesWithUser.values) {
            for (product in purchases[user]!!.keys) {
                if (purchases[userId]!!.containsKey(product)) {
                    if (!sim.containsKey(product))
                        sim.put(product, 0.0)

                    val p = product
                    val purUserProd = purchases[user]!![product]!!

                    val swappedMap = TreeMap<Long, Double>()
                    for (key in bestMatchesWithUser.keys) {
                        val value = bestMatchesWithUser[key]!!
                        swappedMap.put(value, key)
                    }
                    val bestM = swappedMap[user]!!

                    val s = sim[product]!!
                    sim.replace(p, purUserProd * bestM + s)
                }
            }
        }

        for (product in sim.keys) {
            sim.replace(product, sim[product]!! / sim_all)
        }

        val bestSimilarity = sim.entries.stream()
            .limit(bestProducts.toLong())
            .collect(
                { TreeMap() },
                { m: TreeMap<Long?, Double?>, e: Map.Entry<Long?, Double?> ->
                    m.put(
                        e.key,
                        e.value
                    )
                }) { obj: TreeMap<Long?, Double?>, m: TreeMap<Long?, Double?>? ->
                obj.putAll(
                    m!!
                )
            }

//        System.out.printf(bestSimilarity.toString())
        return bestSimilarity
    }


    fun makeRecommendationByCategory(
        userId: Long,
        purchases: MutableMap<Long, MutableMap<Long, Double>>,
        bestUsers: Int,
        bestProducts: Int
    ): TreeMap<Long?, Double?> {
        val matchesWithUser = TreeMap<Double, Long>()

        for (entry in purchases.entries) {
            if (entry.key != userId)
                matchesWithUser.put(distanceCos(purchases[userId]!!, entry.value), entry.key)
        }

        // get most matching users
        var bestMatchesWithUser = matchesWithUser.entries.stream()
            .limit(bestUsers.toLong())
            .collect(
                { TreeMap() },
                { m: TreeMap<Double, Long>, e: Map.Entry<Double, Long> ->
                    m.put(
                        e.key,
                        e.value
                    )
                }) { obj: TreeMap<Double, Long>, m: TreeMap<Double, Long>? ->
                obj.putAll(
                    m!!
                )
            }
//        System.out.printf(bestMatchesWithUser.toString())

        // sim: id_product, overall_price
        val sim: TreeMap<Long, Double> = TreeMap()
        var sim_all = 0.0
        for (matchValue in bestMatchesWithUser.keys) {
            sim_all += bestMatchesWithUser[matchValue]!!
        }
        val newBestMatchesWithUser = bestMatchesWithUser
        for (matchValue in bestMatchesWithUser.keys) {
            if (matchValue < 0.01)
                newBestMatchesWithUser.remove(matchValue)

        }

        bestMatchesWithUser = newBestMatchesWithUser
        for (user in bestMatchesWithUser.values) {
            for (product in purchases[user]!!.keys) {
                if (purchases[userId]!!.containsKey(product)) {
                    if (!sim.containsKey(product))
                        sim.put(product, 0.0)

                    val p = product
                    val purUserProd = purchases[user]!![product]!!

                    val swappedMap = TreeMap<Long, Double>()
                    for (key in bestMatchesWithUser.keys) {
                        val value = bestMatchesWithUser[key]!!
                        swappedMap.put(value, key)
                    }
                    val bestM = swappedMap[user]!!

                    val s = sim[product]!!
                    sim.replace(p, purUserProd * bestM + s)
                }
            }
        }

        for (product in sim.keys) {
            sim.replace(product, sim[product]!! / sim_all)
        }

        val bestSimilarity = sim.entries.stream()
            .limit(bestProducts.toLong())
            .collect(
                { TreeMap() },
                { m: TreeMap<Long?, Double?>, e: Map.Entry<Long?, Double?> ->
                    m.put(
                        e.key,
                        e.value
                    )
                }) { obj: TreeMap<Long?, Double?>, m: TreeMap<Long?, Double?>? ->
                obj.putAll(
                    m!!
                )
            }

//        System.out.printf(bestSimilarity.toString())
        return bestSimilarity
    }
}