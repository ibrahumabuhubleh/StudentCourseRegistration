package com.example.coursereg.web;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@RestController
public class HelloController {
    @GetMapping("/api/health")
    public Map<String, String> health() {
        return Collections.singletonMap("status", "ok");
    }
}
