package com.example.demo.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Service.Receiptservice;
import com.example.demo.model.Receipt;

@RestController
@CrossOrigin
@RequestMapping("/Receipt")
public class ReceiptController {
	@Autowired
	Receiptservice sr;
    @CrossOrigin
 @PostMapping("/generate")
 public Receipt Generator(@RequestParam int carId,@RequestParam String email) {
	 return sr.getreceipt(carId,email);
 }
}
