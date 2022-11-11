package com;

import com.codegym.service.appUserService.AppUserService;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class Main {
    public static void main(String args[]) {
//        int Public;
//        Public = 2;
//
//        Systeouprintln(Public);
        AppUserService appUserService = new AppUserService();
        appUserService.addFriend(1L, 2L);
    }
}
