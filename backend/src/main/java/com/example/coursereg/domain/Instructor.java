package com.example.coursereg.domain;

import jakarta.persistence.*;

@Entity
@Table(name = "instructor")
public class Instructor {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "full_name", nullable = false)
    private String fullName;

    @Column(unique = false) // make optional/simple
    private String email;

    @Column(length = 2000)
    private String bio;

    public Instructor() {}
    public Instructor(String fullName, String email, String bio) {
        this.fullName = fullName;
        this.email = email;
        this.bio = bio;
    }

    public Long getId() { return id; }
    public String getFullName() { return fullName; }
    public String getEmail() { return email; }
    public String getBio() { return bio; }

    public void setId(Long id) { this.id = id; }
    public void setFullName(String fullName) { this.fullName = fullName; }
    public void setEmail(String email) { this.email = email; }
    public void setBio(String bio) { this.bio = bio; }
}
