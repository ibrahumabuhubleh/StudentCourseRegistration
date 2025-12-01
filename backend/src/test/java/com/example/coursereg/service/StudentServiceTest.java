package com.example.coursereg.service;

import com.example.coursereg.domain.Course;
import com.example.coursereg.domain.Enrollment;
import com.example.coursereg.domain.Student;
import com.example.coursereg.repo.CourseRepository;
import com.example.coursereg.repo.EnrollmentRepository;
import com.example.coursereg.repo.StudentRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Optional;

import static org.assertj.core.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class StudentServiceTest {

    @Mock private StudentRepository studentRepo;
    @Mock private CourseRepository courseRepo;
    @Mock private EnrollmentRepository enrollmentRepo;

    @InjectMocks private StudentService service;

    private Student student;
    private Course course;

    @BeforeEach
    void setup() {
        student = new Student();
        student.setId(1L);
        course = new Course();
        course.setId(10L);
    }

    @Test
    void enroll_preventsDuplicateEnrollment() {
        when(studentRepo.findById(1L)).thenReturn(Optional.of(student));
        when(courseRepo.findById(10L)).thenReturn(Optional.of(course));
        when(enrollmentRepo.existsByStudentAndCourse(student, course)).thenReturn(true);

        assertThatThrownBy(() -> service.enroll(1L, 10L))
                .isInstanceOf(IllegalStateException.class);

        verify(enrollmentRepo, never()).save(any());
    }

    @Test
    void enroll_createsEnrollmentIfNotDuplicate() {
        when(studentRepo.findById(1L)).thenReturn(Optional.of(student));
        when(courseRepo.findById(10L)).thenReturn(Optional.of(course));
        when(enrollmentRepo.existsByStudentAndCourse(student, course)).thenReturn(false);

        Enrollment expected = new Enrollment(student, course);
        when(enrollmentRepo.save(any(Enrollment.class))).thenReturn(expected);

        Enrollment result = service.enroll(1L, 10L);

        assertThat(result.getStudent()).isEqualTo(student);
        assertThat(result.getCourse()).isEqualTo(course);
    }

    @Test
    void unenroll_throwsIfEnrollmentNotFound() {
        when(enrollmentRepo.findByStudentIdAndCourseId(1L, 10L)).thenReturn(Optional.empty());

        assertThatThrownBy(() -> service.unenroll(1L, 10L))
                .isInstanceOf(IllegalArgumentException.class);

        verify(enrollmentRepo, never()).delete(any());
    }
}
