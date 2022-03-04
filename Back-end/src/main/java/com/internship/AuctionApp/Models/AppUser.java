package com.internship.AuctionApp.Models;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;
import java.util.Collection;

@Entity
@Table(name = "app_user", uniqueConstraints = {
        @UniqueConstraint(columnNames = {"email"})
})
public class AppUser implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "ID_GENERATOR")
    @SequenceGenerator(name = "ID_GENERATOR", sequenceName = "SEQUENCE_GENERATOR", allocationSize = 1)
    @Column(name = "id", nullable = false)
    private int user_id;

    @Column(
            columnDefinition = "TEXT"
    )
    private String first_name;

    @Column(
            columnDefinition = "TEXT"
    )
    private String last_name;

    @Column(
            columnDefinition = "TEXT"
    )
    private String password;

    @Column(
            nullable=false,
            columnDefinition = "TEXT"
    )
    private String email;

    @Column(
            nullable = true,
            columnDefinition = "TEXT"
    )
    private String gender;

    @Column(
            nullable = true,
            columnDefinition = "TEXT"
    )
    private String image_url;

    @Column(
            nullable = true
    )
    private Date birth_date;

    @Column(
            nullable = true,
            columnDefinition = "TEXT"
    )
    private String country;

    @Column(
            nullable = true,
            columnDefinition = "TEXT"
    )
    private String state;

    @Column(
            nullable = true,
            columnDefinition = "TEXT"
    )
    private String city;

    @Column(
            nullable = true,
            columnDefinition = "TEXT"
    )
    private String street;

    @Column(
            nullable = true,
            columnDefinition = "TEXT"
    )
    private String zip_code;

    @Column
    private Timestamp created_at;

    @Column
    private Timestamp updated_at;

    public AppUser(String first_name, String last_name, String password, String email, String gender, String image_url, Date birth_date, String country, String state, String city, String street, Timestamp created_at, Timestamp updated_at) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.password = password;
        this.email = email;
        this.gender = gender;
        this.image_url = image_url;
        this.birth_date = birth_date;
        this.country = country;
        this.state = state;
        this.city = city;
        this.street = street;
        this.zip_code = zip_code;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    public AppUser() {

    }

    public String getFirst_name() {
        return first_name;
    }

    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }

    public String getLast_name() {
        return last_name;
    }

    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getImage_url() {
        return image_url;
    }

    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }

    public Date getBirth_date() {
        return birth_date;
    }

    public void setBirth_date(Date birth_date) {
        this.birth_date = birth_date;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getZip_code() {
        return zip_code;
    }

    public void setZip_code(String zip_code) {
        this.zip_code = zip_code;
    }

    public Timestamp getCreated_at() {
        return created_at;
    }

    public void setCreated_at(Timestamp created_at) {
        this.created_at = created_at;
    }

    public Timestamp getUpdated_at() {
        return updated_at;
    }

    public void setUpdated_at(Timestamp updated_at) {
        this.updated_at = updated_at;
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }

    @Override
    public String getPassword() {
        return this.password;
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
