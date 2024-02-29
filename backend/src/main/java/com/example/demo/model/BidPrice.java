package com.example.demo.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class BidPrice {
	
	@Id
	private long CarId;
	private String CustomerName;
 private int Maxbid;
public BidPrice(long carId, int maxbid,String CustomerName) {
	CarId = carId;
	Maxbid = maxbid;
	this.CustomerName=CustomerName;
}
public BidPrice() {
}
public long getCarId() {
	return CarId;
}
public void setCarId(long carId) {
	CarId = carId;
}
public String getCustomerName() {
	return CustomerName;
}
public void setCustomerName(String customerName) {
	CustomerName = customerName;
}
public int getMaxbid() {
	return Maxbid;
}
public void setMaxbid(int maxbid) {
	Maxbid = maxbid;
}
}
