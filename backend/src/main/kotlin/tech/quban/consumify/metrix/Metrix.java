package tech.quban.consumify.metrix;

import kotlin.math.UMathKt;

import java.util.*;

import static org.apache.commons.lang3.math.NumberUtils.min;

public class Metrix {

    int getSameElementsAmount(Map<Integer, Double> a, Map<Integer, Double> b) {
        int s = 0;
        for (Map.Entry<Integer, Double> para : a.entrySet()) {
            if (a.containsKey(para.getKey())) {
                s++;
            }
        }
        return s;
    }

    /*
    Couple of users only
    a,b = Map<idProduct, overallPrice>
     */
    double distance_cos(Map<Integer, Double> a, Map<Integer, Double> b) {
        Double a_b = 0.0;
        Double a_a = 0.0;
        Double b_b = 0.0;

        for (Map.Entry<Integer, Double> para : a.entrySet()) {
            if (b.containsKey(para.getKey())) {
                a_b += a.get(para.getValue()) * b.get(para.getValue());
                a_a += a.get(para.getValue()) * a.get(para.getValue());
                b_b += b.get(para.getValue()) * b.get(para.getValue());
            }
        }
        return a_b / Math.sqrt(a_a) / Math.sqrt(b_b);
    }

    double SzymkiewiczSimpsonCoefficent(Map<Integer, Double> a, Map<Integer, Double> b) {
        int c = getSameElementsAmount(a, b);
        return c / (min(a.values().size(), b.values().size()));
    }

    double JakkarCoefficent(Map<Integer, Double> a, Map<Integer, Double> b) {
        int c = getSameElementsAmount(a, b);
        return c / (a.values().size() + b.values().size() - c);
    }

    void makeRecommendation(Integer userId, Map<Integer, Map<Integer, Double>> purchases, int bestUsers, int bestProducts) {
        TreeMap<Double, Integer> matchesWithUser = new TreeMap<Double, Integer>();

        // swapped successfully???
        for (Map.Entry<Integer, Map<Integer, Double>> curUserMap : purchases.entrySet()) {
            if (curUserMap.getKey() != userId)
                matchesWithUser.put(distance_cos(purchases.get(userId), curUserMap.getValue()), curUserMap.getKey());
        }

        TreeMap<Double, Integer> bestMatchesWithUser = matchesWithUser.entrySet().stream()
                .limit(bestUsers)
                .collect(TreeMap::new, (m, e) -> m.put(e.getKey(), e.getValue()), Map::putAll);
        System.out.printf(bestMatchesWithUser.toString());

        TreeMap<Integer, Double> sim = new TreeMap();
        Double sim_all = 0.0;
        for (Double matchValue : bestMatchesWithUser.keySet()) {
            sim_all += bestMatchesWithUser.get(matchValue);
        }

        TreeMap<Double, Integer> newBestMatchesWithUser = bestMatchesWithUser;
        for (Double matchValue : bestMatchesWithUser.keySet()) {
            if (matchValue < 0.0)
                newBestMatchesWithUser.remove(matchValue);
        }
        bestMatchesWithUser = newBestMatchesWithUser;

        for (Integer user : bestMatchesWithUser.values()) {
            for (Integer product : purchases.get(user).keySet()) {
                if (purchases.get(userId).containsKey(product)) {
                    if (sim.containsKey(product))
                        sim.put(product, 0.0);
                    sim.replace(
                            product,
                            purchases.get(user).get(product) * bestMatchesWithUser.get(user) + sim.get(product)
                    );
                }
            }
        }
        for (Integer product : sim.keySet()) {
            sim.replace(product, sim.get(product)/sim_all);
        }
        System.out.printf(sim.toString());
    }
}
