package tech.quban.consumify

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication

@SpringBootApplication
class ConsumifyApplication

fun main(args: Array<String>) {
	runApplication<ConsumifyApplication>(*args)
}
