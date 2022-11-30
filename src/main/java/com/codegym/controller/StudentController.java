package com.codegym.controller;

import com.codegym.model.Student;
import com.codegym.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/students")
public class StudentController {
    @Autowired
    StudentRepository studentRepository;
    @GetMapping
    private ResponseEntity findAll() {
        return new ResponseEntity(studentRepository.findAll(), HttpStatus.OK);
    }
    @PostMapping
    private ResponseEntity save(@RequestBody Student student) {
        return new ResponseEntity(studentRepository.save(student), HttpStatus.OK);
    }
    @DeleteMapping("/{id}")
    private ResponseEntity delete(@PathVariable Long id) {
        studentRepository.deleteById(id);
        return new ResponseEntity(HttpStatus.OK);
    }
    @GetMapping("/find-by-name")
    private ResponseEntity findAllByName(@RequestParam String name) {
        return new ResponseEntity(studentRepository.findAllByNameContaining(name), HttpStatus.OK);
    }
}
