package com.internship.AuctionApp.Models;

public class JWTModel {
    private String token;

    public JWTModel(String token) {
        this.token = token;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }
}
