package com.example.springangular.helper;

import com.example.springangular.entity.CSVFile;
import com.example.springangular.entity.ErrorMessage;

import javax.validation.ConstraintViolation;
import javax.validation.Validation;
import javax.validation.Validator;
import javax.validation.ValidatorFactory;
import java.util.ArrayList;
import java.util.List;
import java.util.Set;

public class ErrorMessageHelper {
    public static List<ErrorMessage> recordStatuses = new ArrayList<>();
    public static List<CSVFile> recordsValidated(List<CSVFile> files, int submissionID) {
        List<CSVFile> validFile = new ArrayList<>();
        for(CSVFile file: files){

            ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
            Validator validator = factory.getValidator();

            Set<ConstraintViolation<CSVFile>> constraintViolations = validator.validate(file);
            if( constraintViolations.size() == 0 ){
                inValidRecordStatuses(file, "Valid", submissionID);
            }else{
                inValidRecordStatuses(file, constraintViolations.iterator().next().getMessage(), submissionID);
            }
            validFile.add(file);
        }
        return validFile;
    }
    public static void inValidRecordStatuses(CSVFile file, String status, int submissionID) {
        recordStatuses.add(new ErrorMessage(file.getId(), status, submissionID));
    }
}
