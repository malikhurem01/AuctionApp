package com.internship.AuctionApp.services;

import com.internship.AuctionApp.Models.Bid;
import com.internship.AuctionApp.Repositories.BidRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class BidServiceImpl implements BidService{

    private final BidRepository bidRepository;

    @Override
    public Bid saveBid(Bid bid) {
        return bidRepository.save(bid);
    }

}
