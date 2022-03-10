package com.internship.AuctionApp.Repositories;

import com.internship.AuctionApp.Models.Product;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductRepository extends JpaRepository<Product, Long> {

}
