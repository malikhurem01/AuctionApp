package com.internship.AuctionApp.Services;

import com.internship.AuctionApp.Models.AppUser;
import com.internship.AuctionApp.Repositories.AppUserRepository;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@AllArgsConstructor
@Service
public class AppUserService implements UserDetailsService{

    private final AppUserRepository appUserRepository;
    private final String USER_NOT_FOUND_MESSAGE = "user with email %s not found";

    @Override
    public AppUser loadUserByUsername(String email) throws UsernameNotFoundException {
        Boolean exists = appUserRepository.findByEmail(email).isPresent();
        return appUserRepository.findByEmail(email).orElseThrow(()  ->
                new UsernameNotFoundException(String.format(USER_NOT_FOUND_MESSAGE, email)));
    }




    public String signUpUser(AppUser user) {
        Boolean exists = appUserRepository.findByEmail(user.getEmail()).isPresent();
        if(exists){
            throw new IllegalStateException("User with that email already exists");
        }
        String encodedPassword = new BCryptPasswordEncoder(10).encode(user.getPassword());
        user.setPassword(encodedPassword);
        appUserRepository.save(user);
        return "Succeded";
    }

}
