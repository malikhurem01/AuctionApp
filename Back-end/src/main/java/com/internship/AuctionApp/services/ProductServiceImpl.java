package com.internship.AuctionApp.services;

import com.internship.AuctionApp.DTOs.ProductDTO;
import com.internship.AuctionApp.Exceptions.EntityNotFoundException;
import com.internship.AuctionApp.Exceptions.ServiceException;
import com.internship.AuctionApp.Models.Product;
import com.internship.AuctionApp.Products.ProductFilterRequest;
import com.internship.AuctionApp.Products.ProductFilterResponse;
import com.internship.AuctionApp.Repositories.ProductRepository;
import org.hibernate.action.internal.EntityActionVetoException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.w3c.dom.stylesheets.LinkStyle;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService {

    private final ProductRepository productRepository;

    @Autowired
    public ProductServiceImpl(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Product getProduct(final Long id) {
        Optional<Product> product = productRepository.findById(id);
        if (product == null) {
            throw new EntityNotFoundException("Product");
        }
        return product.get();
    }

    @Override
    public Page<Product> findAllProductsWithPagination(final int offset, final int pageSize, final String sort) {
        try {
            return productRepository.findAll(PageRequest.of(offset, pageSize).withSort(Sort.by(Sort.Direction.ASC, sort)));
        } catch (Exception e) {
            throw new ServiceException((e.getMessage()));
        }
    }

    @Override
    public ProductFilterResponse filter(ProductFilterRequest productFilterRequest) {
        try {
            Page<Product> productPage = productRepository.findAll(
                    PageRequest.of(productFilterRequest.getOffset(),
                                    productFilterRequest.getPageSize())
                            .withSort(Sort.by(Sort.Direction.ASC, productFilterRequest.getSort())));
            final List<ProductDTO> products = productPage
                    .stream()
                    .map(product -> new ProductDTO(product, null)).toList();
            final ProductFilterResponse productFilterResponse = new ProductFilterResponse(
                    products,
                    productFilterRequest.getPageSize(),
                    products.size());
            return productFilterResponse;
        } catch (Exception e) {
            throw new ServiceException(e.getMessage());
        }
    }
}
