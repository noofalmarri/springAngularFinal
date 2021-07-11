package com.example.springangular.controller;

import com.example.springangular.entity.ErrorMessage;
import com.example.springangular.service.ErrorMessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
public class ErrorMessageController {
    @Autowired
    private ErrorMessageService service;

    @PostMapping("/addErrorProduct")
    public ErrorMessage addProduct(@RequestBody ErrorMessage file){
        return service.saveProduct(file);
    }
    @PostMapping("/addMessages")
    public List<ErrorMessage> addMessages(){
        return service.saveErrorMessages();
    }
    @PutMapping("/updateMessage")
    public ErrorMessage updateErrorMessage(@RequestBody ErrorMessage errorMessage){
        return service.updateErrorMessage(errorMessage);
    }

    @GetMapping("/recordStatuses/{id}")
    public ErrorMessage findRecordStatusById(@PathVariable long id){
        return service.getRecordStatusById(id);
    }

    @GetMapping("/errorMessage")
    public List<ErrorMessage> findAllErrorMessage() {
        return service.getAllErrorMessage();
    }

}
