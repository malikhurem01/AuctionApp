package com.internship.AuctionApp.security;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;


public class PasswordConfig {

    public static final PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder(10);
    }
}
