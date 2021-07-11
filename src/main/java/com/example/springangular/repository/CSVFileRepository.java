package com.example.springangular.repository;

import com.example.springangular.entity.CSVFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CSVFileRepository extends JpaRepository<CSVFile, Long> {
    CSVFile findByWorkerName(String name);
    CSVFile findBySponsorName(String name);
}
