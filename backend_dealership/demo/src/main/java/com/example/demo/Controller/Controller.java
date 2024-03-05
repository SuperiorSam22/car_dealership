package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.demo.Service.BidServices;
import com.example.demo.model.BidPrice;

@CrossOrigin
@RestController
@RequestMapping("/Bid")

public class Controller {
 @Autowired
 private BidServices sr;
    @CrossOrigin
@PostMapping("/intiate")
public String intial(@RequestBody BidPrice bp)
{
    	System.out.println(bp.getCarId());
    	System.out.println(bp.getCustomerName());
	return sr.Intialize(bp.getCarId(),bp.getCustomerName());
}
    @CrossOrigin
 @PostMapping("/bid")
 public String bidnow(@RequestBody BidPrice bd)
 {
     System.out.println(bd.getCustomerName());
	 return sr.AddBid(bd.getCustomerName(),bd.getCarId(),bd.getMaxbid(), bd.getEmail());
 }
    @CrossOrigin
 @GetMapping("/getAllBid")
 public List<BidPrice> getAllBid(@RequestBody BidPrice bp)
 {
	 return sr.getAllBid(bp.getEmail());
 }
}
