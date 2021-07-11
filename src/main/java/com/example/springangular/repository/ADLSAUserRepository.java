package com.example.springangular.repository;

import com.example.springangular.entity.ADLSAUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ADLSAUserRepository extends JpaRepository<ADLSAUser, Long> {
   // ADLSAUser getUserByUserPass(String username, String password);
}
