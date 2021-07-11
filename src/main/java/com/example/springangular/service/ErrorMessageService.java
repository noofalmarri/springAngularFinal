package com.example.springangular.service;

import com.example.springangular.entity.ErrorMessage;
import com.example.springangular.repository.ErrorMessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

import static com.example.springangular.helper.ErrorMessageHelper.recordStatuses;

@Service
public class ErrorMessageService {
    @Autowired
    private ErrorMessageRepository repository;

    public ErrorMessage saveProduct(ErrorMessage file){
        return repository.save(file);
    }

    public List<ErrorMessage> saveErrorMessages(){
        return repository.saveAll(recordStatuses);
    }

    public ErrorMessage updateErrorMessage(ErrorMessage message){
        ErrorMessage existing = repository.findById(message.getId()).orElse(null);
        assert existing != null;
        existing.setMessage(message.getMessage());
        return repository.save(existing);
    }

    public List<ErrorMessage> getAllErrorMessage(){
        return repository.findAll();
    }

    public ErrorMessage getRecordStatusById(long serialNo){
        return repository.findById(serialNo).orElse(null);
    }

}
