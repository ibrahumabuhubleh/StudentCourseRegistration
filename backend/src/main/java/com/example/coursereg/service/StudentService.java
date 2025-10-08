package com.example.coursereg.service;

import com.example.coursereg.domain.Course;
import com.example.coursereg.domain.Student;
import com.example.coursereg.repo.CourseRepository;
import com.example.coursereg.repo.EnrollmentRepository;
import com.example.coursereg.repo.StudentRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class StudentService {

    private final StudentRepository students;
    private final CourseRepository courses;
    private final EnrollmentRepository enrollments;

    public StudentService(StudentRepository students,
                          CourseRepository courses,
                          EnrollmentRepository enrollments) {
        this.students = students;
        this.courses = courses;
        this.enrollments = enrollments;
    }

    public Student create(Student s) {
        // fullName is required at DB level; you can add validation if you want
        return students.save(s);
    }

    public List<Student> list() {
        return students.findAll();
    }

    @Transactional
    public Enrollment enroll(Long studentId, Long courseId) {
        Student student = students.findById(studentId)
                .orElseThrow(() -> new IllegalArgumentException("Student not found: " + studentId));
        Course course = courses.findById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("Course not found: " + courseId));

        if (enrollments.existsByStudentAndCourse(student, course)) {
            throw new IllegalStateException("Student already enrolled in this course");
        }

        Enrollment e = new Enrollment();
        e.setStudent(student);
        e.setCourse(course);
        return enrollments.save(e);
    }

    public List<Enrollment> listEnrollments(Long studentId) {
        return enrollments.findByStudentId(studentId);
    }

    @Transactional
    public void unenroll(Long studentId, Long courseId) {
        Enrollment e = enrollments.findByStudentIdAndCourseId(studentId, courseId)
                .orElseThrow(() -> new IllegalArgumentException("Enrollment not found"));
        enrollments.delete(e);
    }
}
