package com.example.coursereg.repo;

import com.example.coursereg.domain.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
    // no custom methods needed right now
}
