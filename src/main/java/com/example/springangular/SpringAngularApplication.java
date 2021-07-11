package com.example.springangular;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication(scanBasePackages = { "com" })
@EntityScan(basePackages = { "com" })
public class SpringAngularApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringAngularApplication.class, args);
    }

}
