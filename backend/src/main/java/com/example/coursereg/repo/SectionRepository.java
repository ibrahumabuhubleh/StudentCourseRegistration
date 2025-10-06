package com.example.coursereg.repo;

import com.example.coursereg.domain.Section;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SectionRepository extends JpaRepository<Section, Long> {
    List<Section> findByTerm(String term);
}
