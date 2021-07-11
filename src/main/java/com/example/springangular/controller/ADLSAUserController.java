package com.example.springangular.controller;

import com.example.springangular.entity.ADLSAUser;
import com.example.springangular.entity.Status;
import com.example.springangular.repository.ADLSAUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ADLSAUserController {

    @Autowired
    ADLSAUserRepository adlsaUserRepository;

    @PostMapping("/adlsaUsers/register")
    public Status registerUser(@Valid @RequestBody ADLSAUser newADLSAUser) {
        List<ADLSAUser> adlsaUsers = adlsaUserRepository.findAll();
        System.out.println("New user: " + newADLSAUser.toString());
        for (ADLSAUser adlsaUser : adlsaUsers) {
            System.out.println("Registered user: " + newADLSAUser.toString());
            if (adlsaUser.equals(newADLSAUser)) {
                System.out.println("User Already exists!");
                return Status.USER_ALREADY_EXISTS;
            }
        }
        adlsaUserRepository.save(newADLSAUser);
        return Status.SUCCESS;
    }

    @PostMapping("/adlsaUsers/login")
    public Status loginUser(@Valid @RequestBody ADLSAUser adlsaUser) {
        List<ADLSAUser> adlsaUsers = adlsaUserRepository.findAll();
        for (ADLSAUser other : adlsaUsers) {
            if (other.equals(adlsaUser)) {
                adlsaUser.setLoggedIn(true);
                adlsaUserRepository.save(adlsaUser);
                System.out.println("success");
                return Status.SUCCESS;
            }
        }
        System.out.println("FAILURE");
        return Status.FAILURE;
    }

    @PostMapping("/adlsaUsers/logout")
    public Status logUserOut(@Valid @RequestBody ADLSAUser adlsaUser) {
        List<ADLSAUser> adlsaUsers = adlsaUserRepository.findAll();
        for (ADLSAUser other : adlsaUsers) {
            if (other.equals(adlsaUser)) {
                adlsaUser.setLoggedIn(false);
                adlsaUserRepository.save(adlsaUser);
                return Status.SUCCESS;
            }
        }
        return Status.FAILURE;
    }

    @DeleteMapping("/adlsaUsers/all")
    public Status deleteUsers() {
        adlsaUserRepository.deleteAll();
        return Status.SUCCESS;
    }

}
