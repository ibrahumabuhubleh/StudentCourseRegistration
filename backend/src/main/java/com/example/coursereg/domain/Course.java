package com.example.coursereg.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "course", uniqueConstraints = @UniqueConstraint(columnNames = "code"))
public class Course {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false) private String code;
    @Column(nullable = false) private String title;
    @Column(nullable = false) private Integer credits;

    // NEW: online teaching link to instructor (optional)
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "instructor_id")
    private Instructor instructor;

    public Course() {}
    public Course(String code, String title, Integer credits) {
        this.code = code;
        this.title = title;
        this.credits = credits;
    }

    public Long getId() { return id; }
    public String getCode() { return code; }
    public String getTitle() { return title; }
    public Integer getCredits() { return credits; }
    public Instructor getInstructor() { return instructor; }

    public void setId(Long id) { this.id = id; }
    public void setCode(String code) { this.code = code; }
    public void setTitle(String title) { this.title = title; }
    public void setCredits(Integer credits) { this.credits = credits; }
    public void setInstructor(Instructor instructor) { this.instructor = instructor; }
}
