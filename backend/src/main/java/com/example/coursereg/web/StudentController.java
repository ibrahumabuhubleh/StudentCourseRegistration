package com.example.coursereg.web;

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

    // DTO for create request (no "record" keyword)
    public static class CreateStudentRequest {
        private String fullName;
        private String name;

        public CreateStudentRequest() {}

        public String getFullName() {
            return fullName;
        }
        public void setFullName(String fullName) {
            this.fullName = fullName;
        }

        public String getName() {
            return name;
        }
        public void setName(String name) {
            this.name = name;
        }
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Student create(@RequestBody CreateStudentRequest req) {
        Student s = new Student();
        s.setFullName(req.getFullName()); // required (DB not null)
        s.setName(req.getName());         // optional
        return service.create(s);
    }

    @GetMapping
    public List<Student> list() {
        return service.list();
    }

    @PostMapping("/{studentId}/enroll/{courseId}")
    public Enrollment enroll(@PathVariable Long studentId, @PathVariable Long courseId) {
        return service.enroll(studentId, courseId);
    }

    @GetMapping("/{studentId}/enrollments")
    public List<Enrollment> listEnrollments(@PathVariable Long studentId) {
        return service.listEnrollments(studentId);
    }

    @DeleteMapping("/{studentId}/enroll/{courseId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void unenroll(@PathVariable Long studentId, @PathVariable Long courseId) {
        service.unenroll(studentId, courseId);
    }
}
