package com.example.coursereg.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "student")
public class Student {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // Keep columns to match your existing DB schema
    @Column(nullable = false)
    private String name;        // short name (e.g., "Alice")

    @Column(name = "full_name", nullable = false)
    private String fullName;    // full name (e.g., "Alice Johnson")

    private String major;       // optional

    public Student() {}
    public Student(String name, String fullName, String major) {
        this.name = name;
        this.fullName = fullName;
        this.major = major;
    }

    public Long getId() { return id; }
    public String getName() { return name; }
    public String getFullName() { return fullName; }
    public String getMajor() { return major; }

    public void setId(Long id) { this.id = id; }
    public void setName(String name) { this.name = name; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public void setMajor(String major) { this.major = major; }
}
