package com.internship.AuctionApp.configuration;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Configuration;

@Configuration
@ConfigurationProperties(prefix = "application.api")
public class APIConfig {

    private String prefix;

    public void setPrefix(String prefix){
        prefix = prefix;
    }

    public String getPrefix(){
        return prefix;
    }
}
