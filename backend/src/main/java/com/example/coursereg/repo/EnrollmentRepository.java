package com.example.coursereg.repo;

import com.example.coursereg.domain.Course;
import com.example.coursereg.domain.Enrollment;
import com.example.coursereg.domain.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface EnrollmentRepository extends JpaRepository<Enrollment, Long> {

    boolean existsByStudentAndCourse(Student student, Course course);

    List<Enrollment> findByStudentId(Long studentId);

    Optional<Enrollment> findByStudentIdAndCourseId(Long studentId, Long courseId);
}
