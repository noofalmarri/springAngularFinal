package com.example.springangular.service;

import com.example.springangular.entity.AllSubmissionReport;
import com.example.springangular.entity.CSVFile;
import com.example.springangular.helper.CSVHelper;
import com.example.springangular.helper.ErrorMessageHelper;
import com.example.springangular.helper.SubmissionHelper;
import com.example.springangular.repository.AllSubmissionReportRepository;
import com.example.springangular.repository.CSVFileRepository;
import com.example.springangular.repository.ErrorMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;

@Service
public class CSVService {
    @Autowired
    CSVFileRepository repository;
    @Autowired
    ErrorMessageRepository errorRepository;
    @Autowired
    AllSubmissionReportRepository allSubmissionReportRepository;
    public void save(MultipartFile file, AllSubmissionReport allSubmissionReport) {
        try {
            List<CSVFile> csvFiles = CSVHelper.csvToCSVFiles(file.getInputStream());
            allSubmissionReportRepository.save(allSubmissionReport);
            List<CSVFile> files = ErrorMessageHelper.recordsValidated(csvFiles, allSubmissionReport.getId());

            SubmissionHelper.isSubmissionValid(csvFiles, allSubmissionReport);
            allSubmissionReportRepository.saveAll(SubmissionHelper.submissionStatus);
            errorRepository.saveAll(ErrorMessageHelper.recordStatuses);
            repository.saveAll(files);
        } catch (IOException e) {
            throw new RuntimeException("fail to store csv data: " + e.getMessage());
        }
    }

    public List<CSVFile> getAllCSVFiles() {
        return repository.findAll();
    }
}