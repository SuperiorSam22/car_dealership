package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.BidPrice;

public interface BidRepository extends JpaRepository<BidPrice, Long>
{
}
