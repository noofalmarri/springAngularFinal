package com.example.springangular.controller;


import com.example.springangular.entity.CSVFile;
import com.example.springangular.service.CSVcontentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("http://localhost:4200")
@RestController
public class CSVContentController {
    @Autowired
    private CSVcontentService csVcontentService;

    @PostMapping("/addProduct")
    public CSVFile addProduct(@RequestBody CSVFile file) {
        return csVcontentService.saveProduct(file);
    }

    @PostMapping("/addProducts/{submissionID}")
    public List<CSVFile> addProducts(@RequestBody List<CSVFile> files, @PathVariable int submissionID) {
        return csVcontentService.saveFiles(files, submissionID);
    }

    @GetMapping("/products")
    public List<CSVFile> findAllProducts() {
        return csVcontentService.getFiles();
    }

    @GetMapping("/productById/{id}")
    public CSVFile findProductById(@PathVariable int id) {
        return csVcontentService.getFilesById(id);
    }

    @GetMapping("/product/{name}")
    public CSVFile findProductByName(@PathVariable String name) {
        return csVcontentService.getFilesByWorkerName(name);
    }

    @PutMapping("/update")
    public CSVFile updateProduct(@RequestBody CSVFile file) {
        return csVcontentService.updateProduct(file);
    }

    @DeleteMapping("/delete/{id}")
    public String deleteProduct(@PathVariable int id) {
        return csVcontentService.deleteFile(id);
    }

    @GetMapping("/records/{id}")
    public List<CSVFile> findRecordsOfSubmissions(@PathVariable (value = "id") int id){
        return csVcontentService.getContentOfSubmission(id);
    }

}
