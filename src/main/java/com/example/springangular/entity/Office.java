package com.example.springangular.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Office")
public class Office {
    @Id
    @Column(name = "BUID")
    private int buid;
    @Column(name = "OfficeName")
    private String officeName;
    @Column(name = "address")
    private String address;

    public Office(String officeName, int buid, String address) {
        this.officeName = officeName;
        this.buid = buid;
        this.address = address;
    }

    public Office() {
    }

    public String getOfficeName() {
        return officeName;
    }
    public void setOfficeName(String officeName) {
        this.officeName = officeName;
    }
    public int getBuid() {
        return buid;
    }
    public void setBuid(int buid) {
        this.buid = buid;
    }
    public String getAddress() {
        return address;
    }
    public void setAddress(String address) {
        this.address = address;
    }
}