package com.example.demo.Controller;

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
public String intial(@RequestParam long id,@RequestParam String name)
{
	return sr.Intialize(id,name);
}
    @CrossOrigin
 @PostMapping("/bid")
 public String bidnow(@RequestParam String name,@RequestParam long id,@RequestParam int price)
 {
	 return sr.AddBid(name,id,price);
 }
    @CrossOrigin
 @GetMapping("/getbid")
 public BidPrice getBid(@RequestParam long carId)
 {
	 return sr.getBid(carId);
 }
}
