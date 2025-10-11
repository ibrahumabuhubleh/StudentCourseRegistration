package com.example.coursereg.web;

import com.example.coursereg.domain.Enrollment;
import com.example.coursereg.domain.Student;
import com.example.coursereg.service.StudentService;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    // Create student
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Student create(@RequestBody CreateStudentRequest req) {
        Student s = new Student();
        s.setFullName(req.getFullName()); // required depending on your entity
        s.setName(req.getName());         // optional if present in your entity
        return service.create(s);
    }

    // List students
    @GetMapping
    public List<Student> list() {
        return service.list();
    }

    // Enroll
    @PostMapping("/{studentId}/enroll/{courseId}")
    public Enrollment enroll(@PathVariable Long studentId, @PathVariable Long courseId) {
        return service.enroll(studentId, courseId);
    }

    // List enrollments for a student
    @GetMapping("/{studentId}/enrollments")
    public List<Enrollment> listEnrollments(@PathVariable Long studentId) {
        return service.listEnrollments(studentId);
    }

    // Unenroll
    @DeleteMapping("/{studentId}/enroll/{courseId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void unenroll(@PathVariable Long studentId, @PathVariable Long courseId) {
        service.unenroll(studentId, courseId);
    }

    // Simple DTO for creating students
    public static class CreateStudentRequest {
        private String fullName;
        private String name;

        public CreateStudentRequest() {}

        public String getFullName() { return fullName; }
        public void setFullName(String fullName) { this.fullName = fullName; }

        public String getName() { return name; }
        public void setName(String name) { this.name = name; }
    }
}
