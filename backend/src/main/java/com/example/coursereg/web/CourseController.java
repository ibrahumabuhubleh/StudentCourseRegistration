package com.example.coursereg.web;

import com.example.coursereg.domain.Course;
import com.example.coursereg.repo.CourseRepository;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@SecurityRequirement(name = "basicAuth")
public class CourseController {

    private final CourseRepository courses;

    public CourseController(CourseRepository courses) {
        this.courses = courses;
    }

    @GetMapping
    public List<Course> search(@RequestParam(value = "q", required = false) String q) {
        // Java-8 safe blank check (works on all versions)
        if (q == null || q.trim().isEmpty()) {
            return courses.findAll();
        }
        return courses.findByCodeContainingIgnoreCaseOrTitleContainingIgnoreCase(q, q);
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Course create(@RequestBody Course c) {
        return courses.save(c);
    }
}
