package com.example.springangular.repository;

import com.example.springangular.entity.AllSubmissionReport;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AllSubmissionReportRepository extends JpaRepository<AllSubmissionReport, Integer> {
}
