package com.internship.AuctionApp.registration;

import com.internship.AuctionApp.Models.AppUser;
import com.internship.AuctionApp.Services.AppUserService;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;

@Service
public class RegistrationService {
    public RegistrationService(AppUserService appUserService) {
        this.appUserService = appUserService;
    }

    private AppUserService appUserService;

    public String signUpUser(RegistrationRequest request) {
        return appUserService.signUpUser(new AppUser(
                request.getFirst_name(),
                request.getLast_name(),
                request.getPassword(),
                request.getEmail(),
                null,
                null,
                null,
                null,
                null,
                null,
                null,
                new Timestamp(System.currentTimeMillis()),
                new Timestamp(System.currentTimeMillis())
        ));
    }
}
