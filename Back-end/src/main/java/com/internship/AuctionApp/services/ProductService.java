package com.internship.AuctionApp.services;

import com.internship.AuctionApp.Models.Product;
import com.internship.AuctionApp.Products.ProductFilterRequest;
import com.internship.AuctionApp.Products.ProductFilterResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;

import java.util.List;

public interface ProductService {
    Product getProduct(Long id);
    Page<Product> findAllProductsWithPagination(int offset, int pageSize, String sort);
    ProductFilterResponse filter(ProductFilterRequest productFilterRequest);
}
