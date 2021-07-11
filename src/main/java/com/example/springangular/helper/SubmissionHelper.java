package com.example.springangular.helper;

import com.example.springangular.entity.AllSubmissionReport;
import com.example.springangular.entity.CSVFile;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class SubmissionHelper {
    public static List<AllSubmissionReport> submissionStatus = new ArrayList<>();
    public static void isSubmissionValid(List<CSVFile> files, AllSubmissionReport allSubmissionReport) {
        for (CSVFile file : files) {

            ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
            Validator validator = factory.getValidator();

            Set<ConstraintViolation<CSVFile>> constraintViolations = validator.validate(file);
            if (constraintViolations.size() == 0) {
                inValidRecordStatuses(allSubmissionReport, "Valid");
            } else {
                inValidRecordStatuses(allSubmissionReport, "invalid");
            }
        }
    }
    public static void inValidRecordStatuses(AllSubmissionReport submissionReport, String status) {
        submissionReport.setValidationResult(status);
        submissionStatus.add(submissionReport);
    }
}
