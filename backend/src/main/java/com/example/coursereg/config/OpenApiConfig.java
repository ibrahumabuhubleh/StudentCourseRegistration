package com.example.coursereg.config;

import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.security.SecurityRequirement;
import io.swagger.v3.oas.models.security.SecurityScheme;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {
    @Bean
    public OpenAPI api() {
        SecurityScheme basic = new SecurityScheme()
                .name("basicAuth")
                .type(SecurityScheme.Type.HTTP)
                .scheme("basic");
        return new OpenAPI()
                .info(new Info().title("Course Reg API").version("v1"))
                .schemaRequirement("basicAuth", basic)
                .addSecurityItem(new SecurityRequirement().addList("basicAuth"));
    }
}
