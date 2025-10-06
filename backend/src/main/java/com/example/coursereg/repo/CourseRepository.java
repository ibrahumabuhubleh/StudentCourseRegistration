package com.example.coursereg.repo;

import com.example.coursereg.domain.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface CourseRepository extends JpaRepository<Course, Long> {
    List<Course> findByCodeContainingIgnoreCaseOrTitleContainingIgnoreCase(String code, String title);
}
