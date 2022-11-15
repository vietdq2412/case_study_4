package com.codegym.controller;

import com.codegym.model.AppUser;
import com.codegym.service.appUserService.IAppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class AppUserController {
    @Autowired
    IAppUserService appUserService;

    @GetMapping("/{id}")
    public ResponseEntity<AppUser> getById(@PathVariable Long id){
        AppUser appUser = appUserService.findById(id);
        return new ResponseEntity<>(appUser, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Boolean> save(@RequestBody AppUser appUser){
        return new ResponseEntity<>(appUserService.save(appUser), HttpStatus.OK);
    }
}
