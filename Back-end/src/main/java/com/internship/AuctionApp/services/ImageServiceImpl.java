package com.internship.AuctionApp.services;

import com.internship.AuctionApp.Models.Image;
import com.internship.AuctionApp.Models.Product;
import com.internship.AuctionApp.Repositories.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ImageServiceImpl implements ImageService {

    private final ImageRepository imageRepository;

    @Autowired
    public ImageServiceImpl(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    @Override
    public List<Image> findAllByProductId(final Product product) {
        return imageRepository.findAllByProduct(product);
    }
}
