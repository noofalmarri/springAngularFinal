package com.example.springangular.service;

import com.example.springangular.entity.AllSubmissionReport;
import com.example.springangular.repository.AllSubmissionReportRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class AllSubmissionReportService {
    @Autowired
    private AllSubmissionReportRepository repository;

    public AllSubmissionReport saveProduct(AllSubmissionReport file){
        return repository.save(file);
    }

    //    public AllSubmissionReport getFileByLabourLicenseNumber(String labourLicense){
//        return repository.findByLabourLicenseNumber(labourLicense);
//    }
    public List<AllSubmissionReport> getAllSR(){
        return repository.findAll();
    }

    public List<AllSubmissionReport> getAllSubmissionReports() {
        return repository.findAll();
    }

    public List<AllSubmissionReport> getSubmissionsOfOffice(int labourLicenseNo){
        List<AllSubmissionReport> submissionsOfOffice = new ArrayList<>();
        List<AllSubmissionReport> allSubmissions = getAllSubmissionReports();
        for(AllSubmissionReport submission: allSubmissions){
            if(submission.getLicenseNumber() == labourLicenseNo)
                submissionsOfOffice.add(submission);
        }
        return submissionsOfOffice;
    }

}
