package com.example.springangular.repository;

import com.example.springangular.entity.RecruitmentUser;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RecruitmentUserRepository  extends JpaRepository<RecruitmentUser, Long> {
}
