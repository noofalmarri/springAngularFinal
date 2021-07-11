package com.example.springangular.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "errorMessageTable")
public class ErrorMessage {
    @Id
    @Column(name = "ID")
    private long id;
    @Column(name = "Message")
    private String message;
    @Column(name = "Submission_ID")
    private int submissionID;

    public ErrorMessage(long id, String message, int submissionID) {
        this.id = id;
        this.message = message;
        this.submissionID = submissionID;
    }

    public ErrorMessage() {

    }

    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public int getSubmissionID() {
        return submissionID;
    }
    public void setSubmissionID(int submissionID) {
        this.submissionID = submissionID;
    }

}
