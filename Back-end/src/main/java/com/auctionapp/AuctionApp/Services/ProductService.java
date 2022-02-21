package com.auctionapp.AuctionApp.Services;

import com.auctionapp.AuctionApp.Models.Product;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProductService {
    public List<Product> getProducts(){
        return List.of(new Product("iPhone", 999), new Product("Samsung", 854));
    }
}
