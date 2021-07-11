package com.example.springangular.service;

import com.example.springangular.entity.CSVFile;
import com.example.springangular.entity.ErrorMessage;
import com.example.springangular.helper.ErrorMessageHelper;
import com.example.springangular.repository.CSVFileRepository;
import com.example.springangular.repository.ErrorMessageRepository;
import org.apache.commons.csv.CSVRecord;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class CSVcontentService {
    @Autowired
    private CSVFileRepository repository;
    @Autowired
    private ErrorMessageRepository errorMessageRepository;

    public CSVFile saveProduct(CSVFile file) {
        return repository.save(file);
    }

    public List<CSVFile> saveFiles(List<CSVFile> files, int submissionID) {
        List<CSVFile> validatedFiles = ErrorMessageHelper.recordsValidated(files, submissionID);
        return repository.saveAll(validatedFiles);
    }

    public List<CSVFile> getFiles() {
        return repository.findAll();
    }

    public CSVFile getFilesById(long id) {
        return repository.findById(id).orElse(null);
    }

    public CSVFile getFilesByWorkerName(String name) {
        return repository.findByWorkerName(name);
    }

    public String deleteFile(long id) {
        repository.deleteById(id);
        return "product removed !! " + id;
    }

    public CSVFile updateProduct(CSVFile file) {
        CSVFile existingProduct = repository.findById(file.getId()).orElse(null);
        //existingProduct.setId(file.getId());
        existingProduct.setWorkerName(file.getWorkerName());
        existingProduct.setVisaNumber(file.getVisaNumber());
        existingProduct.setSponsorName(file.getSponsorName());
        existingProduct.setArrivalDate(file.getArrivalDate());
        existingProduct.setRemark(file.getRemark());
        existingProduct.setPassportNo(file.getPassportNo());
        //existingProduct.setCsvID(file.getCsvID());
        return repository.save(existingProduct);
    }
    public CSVFile getRecordById(Long csvID){
        return repository.findById(csvID).orElse(null);
    }

    public List<CSVFile> getContentOfSubmission(int submission_id) {
        List<ErrorMessage> errorMessages = errorMessageRepository.findAll();
        System.out.println(errorMessages);
        List<CSVFile> submissionRecords = new ArrayList<>();
        for (ErrorMessage recordStatus : errorMessages) {
            if (recordStatus.getSubmissionID() == submission_id) {
                CSVFile record = getRecordById(recordStatus.getId());
                System.out.println(record);
                submissionRecords.add(record);
            }
        }
        return submissionRecords;
    }

}
