package com.example.coursereg.domain;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "assignment")
public class Assignment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    private Course course;

    @Column(nullable = false)
    private String title;

    private LocalDateTime dueAt;

    @Column(length = 4000)
    private String description;

    public Assignment() {
    }

    public Assignment(Course course, String title, LocalDateTime dueAt, String description) {
        this.course = course;
        this.title = title;
        this.dueAt = dueAt;
        this.description = description;
    }

    public Long getId() { return id; }
    public Course getCourse() { return course; }
    public String getTitle() { return title; }
    public LocalDateTime getDueAt() { return dueAt; }
    public String getDescription() { return description; }

    public void setId(Long id) { this.id = id; }
    public void setCourse(Course course) { this.course = course; }
    public void setTitle(String title) { this.title = title; }
    public void setDueAt(LocalDateTime dueAt) { this.dueAt = dueAt; }
    public void setDescription(String description) { this.description = description; }
}
