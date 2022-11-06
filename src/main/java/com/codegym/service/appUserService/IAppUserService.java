package com.codegym.service.appUserService;

import com.codegym.model.AppUser;
import com.codegym.service.IGeneralService;
import org.springframework.stereotype.Service;

@Service
public interface IAppUserService extends IGeneralService<AppUser> {
    void addFriend(Long currentUserId, Long targetID);
    void blockUser(Long currentUserId, Long userID);

    void followUser(Long currentUserId, Long userID);

     AppUser findByAccount(Long id);


}
