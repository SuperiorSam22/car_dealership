package com.example.demo.Service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.BidPrice;
import com.example.demo.model.Cars;
import com.example.demo.repository.BidRepository;
import com.example.demo.repository.CrudRepository;

@Service
public class BidServices {
 @Autowired
   private BidRepository repository;
     @Autowired
	  public CrudRepository Ac;
   public String AddBid(String Customername, int CarId,int CurrentBid, String email)
   {
	BidPrice currBid= repository.findById(CarId).orElse(null);
	 Cars crs= Ac.findById(CarId).orElse(null);
	  if(currBid != null && CurrentBid > currBid.getMaxbid())
	  {
	   currBid.setCustomerName(Customername);
	   currBid.setMaxbid(CurrentBid);
	       crs.setPrice(CurrentBid);
		   currBid.setEmail(email);
	    repository.save(currBid);
	   return "Bid Applied";
	  }
	  else
	  {
		  return "Your amount for bid is not sufficient";
	  }   
   }
   public String Intialize(int id , String name)
   {
	   System.out.println(id);
	   System.out.println(name);
	   repository.save(new BidPrice(id,0,name,"blank"));
	   return "Value Updated";
   }
//   public BidPrice getBid(int )
   public List<BidPrice> getAllBid(String username)
   {
	   return repository.findAllByEmail(username);
   }
}
