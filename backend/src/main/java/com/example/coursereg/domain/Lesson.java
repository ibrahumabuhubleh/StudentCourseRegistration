package com.example.coursereg.domain;

import jakarta.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "lesson")
public class Lesson {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    private Course course;

    @Column(nullable = false)
    private String title;

    private LocalDateTime startAt;
    private LocalDateTime endAt;

    @Column(length = 1000)
    private String meetingUrl;

    public Lesson() {}
    public Lesson(Course course, String title, LocalDateTime startAt, LocalDateTime endAt, String meetingUrl) {
        this.course = course;
        this.title = title;
        this.startAt = startAt;
        this.endAt = endAt;
        this.meetingUrl = meetingUrl;
    }

    public Long getId() { return id; }
    public Course getCourse() { return course; }
    public String getTitle() { return title; }
    public LocalDateTime getStartAt() { return startAt; }
    public LocalDateTime getEndAt() { return endAt; }
    public String getMeetingUrl() { return meetingUrl; }

    public void setId(Long id) { this.id = id; }
    public void setCourse(Course course) { this.course = course; }
    public void setTitle(String title) { this.title = title; }
    public void setStartAt(LocalDateTime startAt) { this.startAt = startAt; }
    public void setEndAt(LocalDateTime endAt) { this.endAt = endAt; }
    public void setMeetingUrl(String meetingUrl) { this.meetingUrl = meetingUrl; }
}
