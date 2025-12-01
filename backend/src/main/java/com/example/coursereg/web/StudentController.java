package com.example.coursereg.web;

import com.example.coursereg.domain.Enrollment;
import com.example.coursereg.domain.Student;
import com.example.coursereg.service.StudentService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.parameters.RequestBody;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Tag(name = "Students", description = "Operations for managing students and their enrollments")
@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentService service;

    public StudentController(StudentService service) {
        this.service = service;
    }

    @Operation(summary = "List all students", description = "Retrieve a list of all students registered in the system.")
    @GetMapping
    public List<Student> list() {
        return service.list();
    }

    @Operation(
            summary = "Create a new student",
            description = "Creates a new student record in the system.",
            requestBody = @RequestBody(
                    description = "Student details",
                    required = true,
                    content = @Content(schema = @Schema(implementation = CreateStudentRequest.class))
            )
    )
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)

    public Student create(@RequestBody CreateStudentRequest req) {
        Student s = new Student();
        s.setFullName(req.fullName());
        s.setMajor(req.major());
        return service.create(s);
    }

    @Operation(
            summary = "Enroll a student into a course",
            description = "Enrolls a student in a specific course using its ID."
    )
    @PostMapping("/{studentId}/enroll/{courseId}")
    @ResponseStatus(HttpStatus.CREATED)
    public Enrollment enroll(@PathVariable Long studentId, @PathVariable Long courseId) {
        return service.enroll(studentId, courseId);
    }

    @Operation(
            summary = "List enrollments for a student",
            description = "Returns all course enrollments for the specified student."
    )
    @GetMapping("/{studentId}/enrollments")
    public List<Enrollment> listEnrollments(@PathVariable Long studentId) {
        return service.listEnrollments(studentId);
    }

    @Operation(
            summary = "Unenroll a student from a course",
            description = "Removes a student's enrollment from a specific course."
    )
    @DeleteMapping("/{studentId}/enroll/{courseId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void unenroll(@PathVariable Long studentId, @PathVariable Long courseId) {
        service.unenroll(studentId, courseId);
    }

    @Schema(description = "Student creation request object")
    public record CreateStudentRequest(
            @Schema(example = "John Doe") String fullName,
            @Schema(example = "john.doe@example.com") String email,
            @Schema(example = "Computer Science") String major
    ) {}
}
