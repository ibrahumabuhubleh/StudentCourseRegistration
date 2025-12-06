package com.example.coursereg.repo;

import com.example.coursereg.domain.Course;
import com.example.coursereg.domain.Student;
import com.example.coursereg.domain.Enrollment;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

// Repository interface for accessing enrollment data
public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {

    // Checks if an enrollment already exists for a given student and course
    // Used to prevent duplicate enrollments
    boolean existsByStudentAndCourse(Student student, Course course);

    // Retrieves all enrollments associated with a specific student ID
    List<Enrollment> findByStudentId(Long studentId);

    // Finds a specific enrollment by student ID and course ID
    Optional<Enrollment> findByStudentIdAndCourseId(Long studentId, Long courseId);
}
