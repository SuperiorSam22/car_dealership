package com.example.demo.model;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class BidPrice {
	
	@Id
	private int CarId;
	private String customerName;
 private int maxbid;
 private String email;
public BidPrice(int carId, int maxbid,String CustomerName,String email) {
	this.CarId= carId;
	this.maxbid = maxbid;
	this.customerName=CustomerName;
	this.email=email;
}
public BidPrice() {
}
public int getCarId() {
	return CarId;
}
public void setCarId(int carId) {
	this.CarId = carId;
}
public String getCustomerName() {
	return customerName;
}
public void setCustomerName(String customerName) {
	this.customerName = customerName;
}
public int getMaxbid() {
	return maxbid;
}
public void setMaxbid(int maxbid) {
	this.maxbid = maxbid;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
}
