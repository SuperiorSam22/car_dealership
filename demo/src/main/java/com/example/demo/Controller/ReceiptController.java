package com.example.demo.Controller;

import java.util.List;

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
 @PostMapping("/getAllReceipt")
 public List<Receipt> Generator(@RequestBody Receipt rp) {
	 return sr.getreceipt(rp.getEmail());
 }
}
