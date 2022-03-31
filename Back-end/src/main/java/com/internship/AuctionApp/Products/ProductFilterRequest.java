package com.internship.AuctionApp.Products;

import com.internship.AuctionApp.Models.Product;
import org.springframework.data.domain.Page;

public class ProductFilterRequest {
    private int offset;
    private int pageSize;
    private String sort;

    public ProductFilterRequest(int offset, int pageSize, String sort) {
        this.offset = offset;
        this.pageSize = pageSize;
        this.sort = sort;
    }

    public int getOffset() {
        return offset;
    }

    public void setOffset(int offset) {
        this.offset = offset;
    }

    public int getPageSize() {
        return pageSize;
    }

    public void setPageSize(int pageSize) {
        this.pageSize = pageSize;
    }

    public String getSort() {
        return sort;
    }

    public void setSort(String sort) {
        this.sort = sort;
    }
}
