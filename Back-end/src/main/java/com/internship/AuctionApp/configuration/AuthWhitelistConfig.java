package com.internship.AuctionApp.configuration;

import org.springframework.context.annotation.Configuration;

import java.util.Arrays;
import java.util.List;

@Configuration
public class AuthWhitelistConfig {
    private static List<String> authWhitelist;

    public AuthWhitelistConfig() {
        authWhitelist = Arrays.asList(
                "/api/v1/registration",
                "/api/v1/authenticate"
       );
    }

    public static boolean isWhitelistRoute(String route){
        for(int i = 0; i < authWhitelist.size(); i++){
            if(authWhitelist.get(i).equals(route)){
                return true;
            }
        }
        return false;
    }

    public static List<String> getAuthWhitelist() {
        return authWhitelist;
    }
}
