package com.internship.AuctionApp.Products;

import com.internship.AuctionApp.authentication.AuthenticationController;
import com.internship.AuctionApp.DTOs.ProductDTO;
import com.internship.AuctionApp.DTOs.ProductPaginationDTO;
import com.internship.AuctionApp.Exceptions.EntityNotFoundException;
import com.internship.AuctionApp.Exceptions.ServiceException;
import com.internship.AuctionApp.Models.Image;
import com.internship.AuctionApp.Models.Product;
import com.internship.AuctionApp.services.ImageService;
import com.internship.AuctionApp.services.ProductService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;


@RestController
@RequestMapping(path = "/api/v1")
@CrossOrigin(origins = {"http://localhost:3000", "https://auction-app-internship-fr.herokuapp.com/"})
public class ProductsController {
    private final static Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    private static final int PRODUCTS_PER_PAGE = 4;

    private final ProductService productService;

    private final ImageService imageService;

    @Autowired
    public ProductsController(final ProductService productService,
                              final ImageService imageService) {
        this.productService = productService;
        this.imageService = imageService;
    }

    @GetMapping(path = "/get/products")
    public ResponseEntity<?> getProducts(@RequestParam(required = false, defaultValue = "createdAt") final String sort,
                                         @RequestParam(required = false, defaultValue = "0") final int offset) {
        Page<Product> productsPage = null;
        try {
            productsPage = productService.findAllProductsWithPagination(offset, PRODUCTS_PER_PAGE, sort);
        } catch (ServiceException e) {
            logger.error(e.getMessage());
            return new ResponseEntity<>(e.getMessage(), HttpStatus.SERVICE_UNAVAILABLE);
        } catch (Exception e) {
            logger.error(e.getMessage());
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        ProductPaginationDTO productPaginationDTO = new ProductPaginationDTO(productsPage);
        return ResponseEntity.ok().body(productPaginationDTO);
    }

    @GetMapping(path = "/get/product")
    public ResponseEntity<?> getProduct(@RequestParam(name = "productId") final String id) {
        final Long product_id = Long.valueOf(id);
        Product product = null;
        List<Image> imagesList = null;
        try {
            product = productService.getProduct(product_id);
            imagesList = imageService.findAllByProductId(product);
        } catch (EntityNotFoundException e) {
            logger.error(e.getMessage());
            return new ResponseEntity<>(e.getMessage(), HttpStatus.SERVICE_UNAVAILABLE);
        } catch (ServiceException e) {
            logger.error(e.getMessage());
            return new ResponseEntity<>(e.getMessage(), HttpStatus.SERVICE_UNAVAILABLE);
        } catch (Exception e) {
            logger.error(e.getMessage());
            return new ResponseEntity<>(e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
        }
        ProductDTO productResponse = new ProductDTO(product, imagesList);
        String dateString = LocalDate.now().toString();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.set("Date", dateString);
        return ResponseEntity.ok().headers(httpHeaders).body(productResponse);
    }
}
