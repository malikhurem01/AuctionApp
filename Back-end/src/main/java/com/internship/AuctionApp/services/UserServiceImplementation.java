package com.internship.AuctionApp.services;

import com.auth0.jwt.JWT;
import com.internship.AuctionApp.Models.User;
import com.internship.AuctionApp.Repositories.AppUserRepository;
import com.internship.AuctionApp.utils.JWTSignAlgorithm;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;

@AllArgsConstructor
@Service
public class UserServiceImplementation implements UserDetailsService, UserServiceInterface{

    private final AppUserRepository appUserRepository;
    private final String USER_NOT_FOUND_MESSAGE = "User with email %s not found.";

    @Override
    public User loadUserByUsername(String email) throws UsernameNotFoundException {
        Boolean exists = appUserRepository.findByEmail(email).isPresent();
        User user;
        try{
             user = appUserRepository.findByEmail(email).orElseThrow(()  ->
                    new UsernameNotFoundException(String.format(USER_NOT_FOUND_MESSAGE, email)));
        }
        catch(UsernameNotFoundException exc){
            throw new UsernameNotFoundException(exc.getMessage());
        }
        return user;
    }

    @Override
    public User registerUser(User user) throws Exception{
        final Boolean exists = appUserRepository.findByEmail(user.getEmail()).isPresent();
        if(exists){
            throw new IllegalStateException("User with that email already exists");
        }
        try{
            final String encodedPassword = new BCryptPasswordEncoder(10).encode(user.getPassword());
            user.setPassword(encodedPassword);
            appUserRepository.save(user);
        }catch(Exception exception){
            throw new Exception(exception.getMessage());
        }
        return user;
    }

    @Override
    public String generateToken(String subject, int expirationMinutes, String issuer){
        return JWT.create()
                .withSubject(subject)
                .withExpiresAt(new Date(System.currentTimeMillis() + expirationMinutes * 60 * 1000))
                .withIssuer(issuer)
                .sign(JWTSignAlgorithm.getAlgorithmSignature());
    }


}
