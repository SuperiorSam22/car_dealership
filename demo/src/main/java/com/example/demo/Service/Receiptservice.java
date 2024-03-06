package com.example.demo.Service;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.BidPrice;
import com.example.demo.model.Cars;
import com.example.demo.model.Receipt;
import com.example.demo.model.User;


@Service
public class Receiptservice {
	
	@Autowired
	public UserServiceImpl urs;
	@Autowired
	public BidServices bd;
	@Autowired
	public ServiceforAuction Ac;
   public List<Receipt> getreceipt(String email)
   {
	    List<BidPrice> Alllist=bd.getAllBid(email);
	    List<Receipt> ans= new ArrayList<Receipt>();
	    User user=urs.getValidate(email);
	  for( BidPrice value :Alllist)
	  {
		  Receipt rp= new Receipt();
		  Cars crs= Ac.Findcar(value.getCarId());
		  rp.setFirstName(user.getFirstName());
		  rp.setLastName(user.getLastName());
		  rp.setCarName(crs.getCarname());
		  rp.setEmail(email);
		  rp.setSalePrice(value.getMaxbid());
		  ans.add(rp);
	  }
	   return ans;
   }
}
