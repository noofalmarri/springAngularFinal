package com.example.springangular.entity;


import lombok.AllArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.NotNull;


@Entity
@AllArgsConstructor
@Table(name = "CSV_FILE_TABLE")
public class CSVFile {
    @Id
    @Column(name = "csvID")
    private long csvID;

    @NotNull(message = "Worker name must not be null")
    @Pattern(regexp = "[^0-9]*", message = "not valid worker name")
    @Column(name = "workerName")
    private String workerName;

    @NotNull(message = "visaNo must not be null")
    @Pattern(regexp = "^[0-9]{12}$", message = "Visa must contain 12 digits")
    @Column(name = "visaNumber")
    private String visaNumber;

    @NotNull(message = "Sponsor name must not be null")
    @Pattern(regexp = "[^0-9]*", message = "not valid sponsor name")
    @Column(name = "sponsorName")
    private String sponsorName;

    @NotNull(message = "Arrival date must not be null")
    @Column(name = "arrivalDate")
    private String arrivalDate;

    @NotNull(message = "Remark must not be null")
    @Column(name = "remark")
    private String remark;

    @NotNull(message = "Passport must not be null")
    @Pattern(regexp = "\\s*[a-zA-Z]{2}\\d{7}\\s*", message = "Passport must contain 2 letters and 7 digits")
    @Column(name = "passportNo")
    private String passportNo;


    public CSVFile(){

    }


    public long getId() {
        return csvID;
    }
    public void setId(long id) {
        this.csvID = id;
    }
    public String getWorkerName() {
        return workerName;
    }
    public void setWorkerName(String workerName) {
        this.workerName = workerName;
    }
    public String getVisaNumber() {
        return visaNumber;
    }
    public void setVisaNumber(String visaNumber) {
        this.visaNumber = visaNumber;
    }
    public String getSponsorName() {
        return sponsorName;
    }
    public void setSponsorName(String sponsorName) {
        this.sponsorName = sponsorName;
    }
    public String getArrivalDate() {
        return arrivalDate;
    }
    public void setArrivalDate(String arrivalDate) {
        this.arrivalDate = arrivalDate;
    }
    public String getRemark() {
        return remark;
    }
    public void setRemark(String remark) {
        this.remark = remark;
    }
    public long getCsvID() {
        return csvID;
    }
    public void setCsvID(long fileID) {
        this.csvID = fileID;
    }
    public String getPassportNo() {
        return passportNo;
    }
    public void setPassportNo(String passportNo) {
        this.passportNo = passportNo;
    }
}