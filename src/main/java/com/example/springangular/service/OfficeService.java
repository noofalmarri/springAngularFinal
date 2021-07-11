package com.example.springangular.service;

import com.example.springangular.entity.Office;
import com.example.springangular.repository.OfficeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OfficeService {
    @Autowired
    private OfficeRepository repository;

    public Office saveOffice(Office file){
        return repository.save(file);
    }
    public Office getOfficeById(int labourLicenceNo) {
        return repository.findById(labourLicenceNo).orElse(null);
    }
    public List<Office> getAllOffices(){
        return repository.findAll();
    }
}
