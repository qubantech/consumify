package tech.quban.consumify.security

import org.springframework.stereotype.Component
import org.springframework.web.filter.OncePerRequestFilter
import kotlin.Throws
import javax.servlet.ServletException
import java.io.IOException
import javax.servlet.http.HttpServletRequest
import javax.servlet.http.HttpServletResponse
import javax.servlet.FilterChain

@Component
class CorsFilterImpl : OncePerRequestFilter() {
    @Throws(ServletException::class, IOException::class)
    override fun doFilterInternal(
        request: HttpServletRequest,
        response: HttpServletResponse,
        filterChain: FilterChain
    ) {
        val origin = request.getHeader("Origin")
        if (origin != null && (origin == "http://localhost:3000" || origin == "https://quban.tech")) response.setHeader(
            "Access-Control-Allow-Origin",
            origin
        )
        response.setHeader("Access-Control-Allow-Credentials", "true")
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
        response.setHeader("Access-Control-Max-Age", "3600")
        response.setHeader("Access-Control-Allow-Headers", "Origin, Content-Type, Authorization")
        response.setHeader("Access-Control-Expose-Headers", "refresh-token")

        if ("OPTIONS".equals(request.method, ignoreCase = true)) {
            response.status = HttpServletResponse.SC_OK
        } else {
            filterChain.doFilter(request, response)
        }
    }
}