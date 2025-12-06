package com.example.coursereg.repo;

import com.example.coursereg.domain.Course;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

// Repository interface used for accessing Course data from the database
public interface CourseRepository extends JpaRepository<Course, Long> {

    // Finds courses where the code or title contains the given text (case-insensitive)
    // Useful for implementing a simple search functionality
    List<Course> findByCodeContainingIgnoreCaseOrTitleContainingIgnoreCase(
            String code,
            String title
    );
}
