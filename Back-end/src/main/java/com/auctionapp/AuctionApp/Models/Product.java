package com.auctionapp.AuctionApp.Models;

public class Product {
    private String name;
    private int price;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public float getPrice() {
        return price;
    }

    public void setPrice(int price) {
        this.price = price;
    }

    public Product(String _name, int _price){
        this.name = _name;
        this.price = _price;
    }

}
