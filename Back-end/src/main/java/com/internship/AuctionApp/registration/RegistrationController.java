package com.internship.AuctionApp.registration;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@AllArgsConstructor
@RequestMapping(path="api/v1")
@CrossOrigin(origins = {"http://localhost:3000"})
public class RegistrationController {

    private RegistrationService registrationService;

    @PostMapping(path="/registration")
    public String register(@RequestBody RegistrationRequest request){
        return registrationService.signUpUser(request);
    }
}
