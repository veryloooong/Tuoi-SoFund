package server.config.security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityCustomizer;
import org.springframework.security.web.SecurityFilterChain;

// TODO: add security config (test oauth first)

@Configuration
@EnableWebSecurity
public class WebSecurityConfig {
  // @Bean
  // WebSecurityCustomizer webSecurityCustomizer() {
  // return (web) -> web.ignoring().requestMatchers("/api/**");
  // }

  /*
   * @Bean
   * SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
   * http
   * .authorizeHttpRequests((requests) -> requests
   * .requestMatchers(HttpMethod.GET, "/")
   * .anonymous());
   * 
   * return http.build();
   * }
   */
}
