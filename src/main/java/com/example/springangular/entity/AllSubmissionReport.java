package com.example.springangular.entity;

import javax.persistence.*;
import java.text.SimpleDateFormat;
import java.util.Date;

@Entity
@Table(name = "AllSubmissionReport")
public class AllSubmissionReport {
    @Id
    @GeneratedValue
    @Column(name = "submissionId")
    private int submissionId;
    @Column(name = "DateOfSubmission")
    private String dateOfSubmission;
    @Column(name = "ValidationResult")
    private String validationResult;
    @Column (name = "licenseNumber")
    private int licenseNumber;
    @Column (name = "FileID")
    private int fileID;

    public AllSubmissionReport(int licenseNumber, int fileID) {
        this.dateOfSubmission = new SimpleDateFormat("dd-MM-YYYY").format(new Date());
        this.fileID = fileID ;
        this.licenseNumber = licenseNumber;
    }

    public AllSubmissionReport() {

    }

    public int getId() {
        return submissionId;
    }
    public String getDateOfSubmission() {
        return dateOfSubmission;
    }
    public void setDateOfSubmission(String dateOfSubmission) {
        this.dateOfSubmission = dateOfSubmission;
    }
    public String getValidationResult() {
        return validationResult;
    }
    public void setValidationResult(String validationResult) {
        this.validationResult = validationResult;
    }
    public int getLicenseNumber() {
        return licenseNumber;
    }
    public void setLicenseNumber(int licenseNumber) {
        this.licenseNumber = licenseNumber;
    }
    public int getFileID() {
        return fileID;
    }
    public void setFileID(int fileID) {
        this.fileID = fileID;
    }
}