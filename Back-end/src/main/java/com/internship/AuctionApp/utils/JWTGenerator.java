package com.internship.AuctionApp.utils;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;

import java.util.Date;

public class JWTGenerator {

    private static final Algorithm algorithm = Algorithm.HMAC256("supersecret".getBytes());

    public static String Generate_TOKEN(String subject, int expirationMinutes, String issuer){
        return JWT.create()
                .withSubject(subject)
                .withExpiresAt(new Date(System.currentTimeMillis() + expirationMinutes * 60 * 1000))
                .withIssuer(issuer)
                .sign(algorithm);
    }
}
