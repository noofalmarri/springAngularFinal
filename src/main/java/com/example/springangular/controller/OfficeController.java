package com.example.springangular.controller;

import com.example.springangular.entity.Office;
import com.example.springangular.service.OfficeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
public class OfficeController {
    @Autowired
    OfficeService officeService;
    @PostMapping("/offices")
    public Office addOffice(@RequestBody Office file){
        return officeService.saveOffice(file);
    }
    @GetMapping("/offices")
    public List<Office> findAllOffices() {
        return officeService.getAllOffices();
    }
}
