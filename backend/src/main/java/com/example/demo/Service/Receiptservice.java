package com.example.demo.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.demo.model.BidPrice;
import com.example.demo.model.Cars;
import com.example.demo.model.Receipt;
import com.example.demo.model.User;

import com.example.demo.repository.RecieptRepository;


@Service
public class Receiptservice {
	
	@Autowired
	public UserServiceImpl urs;
	@Autowired
	public RecieptRepository rpt;
	@Autowired
	public BidServices bd;
	@Autowired
	public ServiceforAuction Ac;
   public Receipt getreceipt(int carId,String email)
   {
	   BidPrice bprice=bd.getBid(carId);
	   User user=urs.getValidate(email);
	   Cars crs= Ac.Findcar(carId);
	   
	   Receipt rp= new Receipt(carId,email,user.getFirstName(),user.getLastName(),crs.getCarname(),bprice.getMaxbid());
	   return rpt.save(rp);
   }
}
