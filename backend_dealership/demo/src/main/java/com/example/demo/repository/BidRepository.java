package com.example.demo.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.BidPrice;

public interface BidRepository extends JpaRepository<BidPrice, Integer>
{

	List<BidPrice> findAllByEmail(String username);
}
