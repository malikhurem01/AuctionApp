package com.internship.AuctionApp.security;

import com.internship.AuctionApp.filters.JWTAuthenticationFilter;
import com.internship.AuctionApp.filters.JWTAuthorizationFilter;
import com.internship.AuctionApp.services.UserServiceImplementation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

@EnableWebSecurity
@Configuration
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    private final UserServiceImplementation userServiceImplementation;

    @Autowired
    private final PasswordConfig passwordConfig;

    @Autowired
    public SecurityConfig(UserServiceImplementation userServiceImplementation, PasswordConfig passwordConfig) {
        this.userServiceImplementation = userServiceImplementation;
        this.passwordConfig = passwordConfig;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        JWTAuthenticationFilter customAuthenticationFilter = new JWTAuthenticationFilter(authenticationManagerBean(), null);
        http.cors().and().csrf().disable();
        http.authorizeRequests().antMatchers("/api/v1/auth/users/current").authenticated();
        http.authorizeRequests().antMatchers("/api/v1/authenticate").permitAll();
        http.authorizeRequests().antMatchers("/api/v1/get/products").permitAll();
        http.authorizeRequests().antMatchers("/api/v1/get/product/**").permitAll();
        http.authorizeRequests().antMatchers("/api/v1/post/bid").permitAll();

        http.addFilter(customAuthenticationFilter);
        http.addFilterBefore(new JWTAuthorizationFilter(), UsernamePasswordAuthenticationFilter.class);
    }

    @Bean
    @Override
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.authenticationProvider(daoAuthenticationProvider());
    }

    @Bean
    public DaoAuthenticationProvider daoAuthenticationProvider() {
        DaoAuthenticationProvider provider = new DaoAuthenticationProvider();
        provider.setPasswordEncoder(passwordConfig.passwordEncoder());
        provider.setUserDetailsService(userServiceImplementation);
        return provider;
    }

}
