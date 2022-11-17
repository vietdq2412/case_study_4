package com.codegym.controller;

import com.codegym.model.AppUser;
import com.codegym.model.AppUserDTO;
import com.codegym.service.appUserService.AppUserDTOService;
import com.codegym.service.appUserService.IAppUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.util.Date;

@RestController
@CrossOrigin("*")
@RequestMapping("/user")
public class AppUserController {
    private long time;
    @Autowired
    IAppUserService appUserService;

    @Autowired
    AppUserDTOService appUserDTOService;

    @GetMapping("/{id}")
    public ResponseEntity<AppUser> getById(@PathVariable Long id){
        AppUser appUser = appUserService.findById(id);
        return new ResponseEntity<>(appUser, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Boolean> save(@RequestBody MultipartFile data){
        this.time = System.currentTimeMillis();
        System.out.println(data);
//        appUser.setImage(time+"-"+appUser.getImage());
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
    @PostMapping("/saveImg")
    public ResponseEntity<Boolean> saveImg(@RequestBody MultipartFile img){
        appUserDTOService.saveImg(img, this.time);
        return new ResponseEntity<>(true, HttpStatus.OK);
    }
}
