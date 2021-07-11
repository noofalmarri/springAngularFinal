package com.example.springangular.entity;

import javax.persistence.*;

@Entity
@Table(name = "files")
public class FileDB {
    @Id
    @GeneratedValue
    private int fileID;
    private String name;
    private String type;

    @Lob
    private byte[] data;

    public FileDB(String fileName, String contentType, byte[] bytes ) {
        this.name = fileName;
        this.type = contentType;
        this.data = bytes;

    }
    public FileDB() {

    }


    public int getFileID() {
        return fileID;
    }
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getType() {
        return type;
    }
    public void setType(String type) {
        this.type = type;
    }
    public byte[] getData() {
        return data;
    }
    public void setData(byte[] data) {
        this.data = data;
    }

}
