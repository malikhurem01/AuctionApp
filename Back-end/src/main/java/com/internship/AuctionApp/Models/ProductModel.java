package com.internship.AuctionApp.Models;

import javax.persistence.*;
import java.sql.Date;
import java.sql.Timestamp;

@Entity
@Table(name = "product")
public class ProductModel {

    @Id
    @SequenceGenerator(
            name = "SEQUENCE_GENERATOR",
            allocationSize = 1,
            sequenceName = "SEQUENCE_GENERATOR"
    )
    @GeneratedValue(
            strategy = GenerationType.SEQUENCE,
            generator = "SEQUENCE_GENERATOR"
    )
    private int product_id;

    @Column(
            columnDefinition = "TEXT",
            nullable = false
    )
    private String title;

    @Column(
            nullable = false
    )
    private int on_stock;

    @Column(
            columnDefinition = "TEXT",
            nullable = false
    )
    private String size;

    @Column(
            columnDefinition = "TEXT",
            nullable = false
    )
    private String description;

    @Column(
            nullable = false
    )
    private float start_price;

    @Column(
            nullable = false
    )
    private Date auction_date_start;

    @Column(
            nullable = false
    )
    private Date auction_date_end;

    @Column(
            columnDefinition = "TEXT",
            nullable = false
    )
    private String country;

    @Column(
            columnDefinition = "TEXT",
            nullable = false
    )
    private String city;

    @Column(
            columnDefinition = "TEXT",
            nullable = false
    )
    private String street;

    @Column
    private int zip_code;

    @Column
    private Timestamp created_at;

    @Column
    private Timestamp updated_at;

    public ProductModel(String title, int on_stock, String size, String description, float start_price, Date auction_date_start, Date auction_date_end, String country, String city, String street, int zip_code, Timestamp created_at, Timestamp updated_at) {
        this.title = title;
        this.on_stock = on_stock;
        this.size = size;
        this.description = description;
        this.start_price = start_price;
        this.auction_date_start = auction_date_start;
        this.auction_date_end = auction_date_end;
        this.country = country;
        this.city = city;
        this.street = street;
        this.zip_code = zip_code;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

    public ProductModel() {

    }

    public int getProduct_id() {
        return product_id;
    }

    public void setProduct_id(int product_id) {
        this.product_id = product_id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getOn_stock() {
        return on_stock;
    }

    public void setOn_stock(int on_stock) {
        this.on_stock = on_stock;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public float getStart_price() {
        return start_price;
    }

    public void setStart_price(float start_price) {
        this.start_price = start_price;
    }

    public Date getAuction_date_start() {
        return auction_date_start;
    }

    public void setAuction_date_start(Date auction_date_start) {
        this.auction_date_start = auction_date_start;
    }

    public Date getAuction_date_end() {
        return auction_date_end;
    }

    public void setAuction_date_end(Date auction_date_end) {
        this.auction_date_end = auction_date_end;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
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

    public int getZip_code() {
        return zip_code;
    }

    public void setZip_code(int zip_code) {
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

}
