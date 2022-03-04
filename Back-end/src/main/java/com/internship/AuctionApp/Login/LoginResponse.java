package com.internship.AuctionApp.Login;

import com.internship.AuctionApp.Models.AppUser;

public class LoginResponse {
    private String JWT_access = null;
    private String JWT_refresh = null;

    private AppUser user = null;

    public LoginResponse(String jwt_access, String jwt_refresh) {
        this.JWT_access = jwt_access;
        this.JWT_refresh = jwt_refresh;
    }

    public LoginResponse(AppUser _user){
        this.user = _user;
    }

    public String getJWT_access() {
        return JWT_access;
    }

    public String getJWT_refresh() {
        return JWT_refresh;
    }

    public AppUser getUser(){
        return this.user;
    }

}
