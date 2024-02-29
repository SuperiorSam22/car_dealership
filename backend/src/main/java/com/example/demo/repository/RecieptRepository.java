package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.demo.model.Receipt;

public interface RecieptRepository extends JpaRepository<Receipt, Integer>{

}
