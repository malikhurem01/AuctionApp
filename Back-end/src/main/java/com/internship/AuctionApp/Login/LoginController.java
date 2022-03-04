package com.internship.AuctionApp.Login;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.interfaces.DecodedJWT;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.internship.AuctionApp.Models.AppUser;
import com.internship.AuctionApp.Models.JWTModel;
import com.internship.AuctionApp.Repositories.AppUserRepository;
import com.internship.AuctionApp.Services.AppUserService;
import com.internship.AuctionApp.utils.JWTGenerator;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import static org.springframework.http.HttpHeaders.AUTHORIZATION;
import static org.springframework.http.HttpStatus.FORBIDDEN;
import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

@RestController
@RequestMapping(path="api/v1")
@CrossOrigin(origins = {"http://localhost:3000"})
public class LoginController {

    @Autowired
    private final AuthenticationManager authenticationManager;

    @Autowired
    private final AppUserService appUserService;

    @Autowired
    private final AppUserRepository appUserRepository;

    public LoginController(AuthenticationManager authenticationManager, AppUserService appUserService, AppUserRepository appUserRepository) {
        this.authenticationManager = authenticationManager;
        this.appUserService = appUserService;
        this.appUserRepository = appUserRepository;
    }

    @GetMapping(path="/get/user")
    @CrossOrigin(origins = {"http://localhost:3000"})
    public ResponseEntity<?> getUserWithToken(HttpServletRequest request){
        System.out.println("Uslo je");
        Algorithm algorithm = Algorithm.HMAC256("supersecret".getBytes());
        JWTVerifier verifier = JWT.require(algorithm).build();
        String authorizationHeader = request.getHeader(AUTHORIZATION);
        String token = authorizationHeader.substring("Bearer ".length());
        DecodedJWT decodedJWT = verifier.verify(token);
        String username = decodedJWT.getSubject();
        AppUser user = appUserService.loadUserByUsername(username);
        return ResponseEntity.ok().body(new LoginResponse(user));
    }

    @PostMapping(path="/authenticate")
    @CrossOrigin(origins = {"http://localhost:3000"})
    public ResponseEntity<?> createAuthenticationToken(@RequestBody LoginRequest loginRequest, HttpServletRequest request) throws BadCredentialsException, Exception{
        Authentication authentication = null;
        try{
            authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUserName(), loginRequest.getPassword())
            );
        }catch(BadCredentialsException exception){
            throw new BadCredentialsException(exception.getMessage());
        }catch(Exception exception){
            System.out.println(exception.getMessage());
        }
        SecurityContextHolder.getContext().setAuthentication(authentication);
        AppUser user = (AppUser) authentication.getPrincipal();

        Algorithm algorithm = Algorithm.HMAC256("supersecret".getBytes());
        String access_token = JWTGenerator.Generate_TOKEN(user.getUsername(), 1, request.getRequestURL().toString());
        String refresh_token = JWTGenerator.Generate_TOKEN(user.getUsername(), 50, request.getRequestURL().toString());

        final HttpHeaders httpHeaders= new HttpHeaders();
        httpHeaders.setContentType(MediaType.APPLICATION_JSON);
        return ResponseEntity.ok().headers(httpHeaders).body(new LoginResponse(access_token, refresh_token));
    }

    @PostMapping("/get/refreshtoken")
    public ResponseEntity<?> refreshToken(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String authorizationHeader = request.getHeader(AUTHORIZATION);
        String refresh_token = null, new_access_token = null;
        if(authorizationHeader != null && authorizationHeader.startsWith("Bearer ")){
            try{
                refresh_token = authorizationHeader.substring("Bearer ".length());
                Algorithm algorithm = Algorithm.HMAC256("supersecret".getBytes());
                JWTVerifier verifier = JWT.require(algorithm).build();
                DecodedJWT decodedJWT = verifier.verify(refresh_token);
                String username = decodedJWT.getSubject();
                AppUser user = appUserService.loadUserByUsername(username);
                new_access_token = JWTGenerator.Generate_TOKEN(user.getUsername(), 10, request.getRequestURL().toString());
            }catch(Exception exc){
                response.setHeader("error", exc.getMessage());
                response.setStatus(FORBIDDEN.value());
                Map<String, String> error = new HashMap<>();
                response.setContentType(APPLICATION_JSON_VALUE);
                new ObjectMapper().writeValue(response.getOutputStream(), error);
            }
        }else{
            throw new RuntimeException("Refresh token not found!");
        }
        return ResponseEntity.ok().body(new LoginResponse(new_access_token, refresh_token));
    }

}
