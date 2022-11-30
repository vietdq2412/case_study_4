package com.codegym.controller;

import com.codegym.model.Student;
import com.codegym.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {
    @Autowired
    StudentRepository studentRepository;
    @GetMapping("/hello")
    private ResponseEntity hello() {
        return new ResponseEntity<>("Hello World", HttpStatus.OK);
    }

}
