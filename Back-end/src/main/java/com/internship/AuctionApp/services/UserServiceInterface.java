package com.internship.AuctionApp.services;

import com.internship.AuctionApp.Models.User;

public interface UserServiceInterface {

    User registerUser(User user) throws Exception;

    String generateToken(String subject, int expirationMinutes, String issuer);
}
