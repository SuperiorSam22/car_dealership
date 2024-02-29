package com.example.demo.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.BidPrice;
import com.example.demo.repository.BidRepository;

@Service
public class BidServices {
 @Autowired
 private BidRepository repository;
   public String AddBid(String Customername,long CarId,int CurrentBid)
   {
	BidPrice currBid= repository.findById(CarId).orElse(null);
	  if(currBid != null && CurrentBid > currBid.getMaxbid())
	  {
	   currBid.setCustomerName(Customername);
	   currBid.setMaxbid(CurrentBid);
	    repository.save(currBid);
	   return "Bid Applied";
	  }
	  else
	  {
		  return "Your amount for bid is not sufficient";
	  }   
   }
   public String Intialize(long id,String name)
   {
	   repository.save(new BidPrice(id,0,name));
	   return "Value Updated";
   }
   public BidPrice getBid(long carId)
   {
	   return repository.findById(carId).orElse(null);
   }
}
