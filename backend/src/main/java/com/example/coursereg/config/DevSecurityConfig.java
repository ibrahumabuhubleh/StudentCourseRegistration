package com.example.coursereg.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Profile;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.provisioning.InMemoryUserDetailsManager;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@Profile("dev")
public class DevSecurityConfig {

    @Bean
    public UserDetailsService users() {
        UserDetails admin = User.withUsername("admin")
                .password("{noop}admin123")         // {noop} = plain text for dev
                .roles("ADMIN")
                .build();

        UserDetails teacher = User.withUsername("teacher")
                .password("{noop}teacher123")
                .roles("INSTRUCTOR")
                .build();

        UserDetails student = User.withUsername("student")
                .password("{noop}student123")
                .roles("STUDENT")
                .build();

        return new InMemoryUserDetailsManager(admin, teacher, student);
    }

    @Bean
    public SecurityFilterChain security(HttpSecurity http) throws Exception {
        http
                .csrf(csrf -> csrf.disable()) // APIs; ok for dev
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/api/health", "/v3/api-docs/**", "/swagger-ui/**").permitAll()
                        .requestMatchers(HttpMethod.POST, "/api/courses/**").hasAnyRole("INSTRUCTOR","ADMIN")
                        .anyRequest().authenticated()
                )
                .httpBasic(Customizer.withDefaults())   // works with curl/Swagger
                .formLogin(Customizer.withDefaults());  // optional: comment this line to disable the login page

        return http.build();
    }
}