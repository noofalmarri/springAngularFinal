package com.example.springangular.controller;

import com.example.springangular.entity.AllSubmissionReport;
import com.example.springangular.service.AllSubmissionReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
public class AllSubmissionReportController {
    @Autowired
    private AllSubmissionReportService service;

    @PostMapping("/addReport")
    public AllSubmissionReport addReport(@RequestBody AllSubmissionReport file) {
        return service.saveProduct(file);
    }

//    @PostMapping("/findByLicense/{name}")
//    public AllSubmissionReport findProductByLicenseNumber(@PathVariable String name){
//        return service.getFileByLabourLicenseNumber(name);
//    }

    @GetMapping("/submissions/{labourLicenseNo}")
    public List<AllSubmissionReport> findSubmissionsOfOffice(@PathVariable (value = "labourLicenseNo") int labourLicenseNo){
        return service.getSubmissionsOfOffice(labourLicenseNo);
    }

    @GetMapping("/submissionreport")
    public ResponseEntity<List<AllSubmissionReport>> getAllSubmissionReport() {
        try {
            List<AllSubmissionReport> submissionReport = service.getAllSubmissionReports();

            if (submissionReport.isEmpty()) {
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }

            return new ResponseEntity<>(submissionReport, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @GetMapping("/allsubmissionreport")
    public List<AllSubmissionReport> findAllSR() {
        return service.getAllSR();
    }
}
