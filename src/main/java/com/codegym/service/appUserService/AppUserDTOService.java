package com.codegym.service.appUserService;

import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@Service
public class AppUserDTOService {
    private final String FILE_PATH = "src\\pitnik-MXH-views\\pitnik-MXH\\images\\avatar";
    public boolean saveImg(MultipartFile img, long time){
        File file = new File(FILE_PATH,time+"-"+img.getOriginalFilename());
        try {
            file.createNewFile();

            FileCopyUtils.copy(img.getBytes(), file);
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
        System.out.println(file.exists());
        return true;
    }
}
