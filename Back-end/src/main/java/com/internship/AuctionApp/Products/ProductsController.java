package com.internship.AuctionApp.Products;

import com.internship.AuctionApp.Models.Product;
import com.internship.AuctionApp.Repositories.ProductRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@AllArgsConstructor
@RequestMapping(path="/api/v1")
@CrossOrigin(origins = {"http://localhost:3000"})
public class ProductsController {

    @Autowired
    private final ProductRepository productRepository;

    @GetMapping(path="/get/products")
    public ResponseEntity<?> getProducts(){
        final List<Product> productsList = productRepository.findAll();
        return ResponseEntity.ok().body(productsList);
    }

    @GetMapping(path="/get/product/{id}")
    public ResponseEntity<?> getProduct(@PathVariable String id) throws Exception {
        final Long product_id = Long.valueOf(id);
        Optional<Product> product = null;
        try {
            product = productRepository.findById(product_id);
        }catch(Exception err){
            return ResponseEntity.badRequest().build();
        }
        return ResponseEntity.ok().body(product);
    }
}
