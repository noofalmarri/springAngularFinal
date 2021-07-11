package com.example.springangular.controller;


import com.example.springangular.entity.AllSubmissionReport;
import com.example.springangular.entity.CSVFile;
import com.example.springangular.entity.FileDB;
import com.example.springangular.helper.CSVHelper;
import com.example.springangular.message.ResponseMessage;
import com.example.springangular.service.CSVService;
import com.example.springangular.service.FileStorageService;
import com.example.springangular.service.OfficeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
public class CSVController {
    @Autowired
    CSVService fileService;
    @Autowired
    FileStorageService storageService;
    @Autowired
    OfficeService officeService;

    @PostMapping("/upload/{labourLicenseNo}")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file, @PathVariable int labourLicenseNo) {
        String message = "";

        if (CSVHelper.hasCSVFormat(file)) {
            try {
                if(officeService.getOfficeById(labourLicenseNo) == null){
                    message = "Office license not found!";
                }else
                {
                    FileDB filedb = storageService.store(file);
                    AllSubmissionReport allSubmission = new AllSubmissionReport(labourLicenseNo, filedb.getFileID());
                    fileService.save(file, allSubmission);
                    message = "Uploaded the file successfully: " + file.getOriginalFilename();
                }
                return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));
            } catch (Exception e) {
                message = "Uploaded the file successfully: " + file.getOriginalFilename() + " but with errors!";
                return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
            }
        }

        message = "Please upload a csv file!";
        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(new ResponseMessage(message));
    }

    @GetMapping("/csvfiles")
    public ResponseEntity<List<CSVFile>> getAllCSVFiles() {
        try {
            List<CSVFile> csvFiles = fileService.getAllCSVFiles();

            if (csvFiles.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(csvFiles, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

}