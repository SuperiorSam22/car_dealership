package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Receipt {
	@Id
  public int carid;
  public String email;
  public String firstName;
  public String lastName;
  public String carName;
  public int salePrice;
public Receipt(int id, String email, String firstName, String lastName, String carName, int salePrice) {
	super();
	this.carid = id;
	this.email = email;
	this.firstName = firstName;
	this.lastName = lastName;
	this.carName = carName;
	this.salePrice = salePrice;
}
public Receipt() {
}
public int getId() {
	return carid;
}
public void setId(int id) {
	this.carid = id;
}
public String getEmail() {
	return email;
}
public void setEmail(String email) {
	this.email = email;
}
public String getFirstName() {
	return firstName;
}
public void setFirstName(String firstName) {
	this.firstName = firstName;
}
public String getLastName() {
	return lastName;
}
public void setLastName(String lastName) {
	this.lastName = lastName;
}
public String getCarName() {
	return carName;
}
public void setCarName(String carName) {
	this.carName = carName;
}
public int getSalePrice() {
	return salePrice;
}
public void setSalePrice(int salePrice) {
	this.salePrice = salePrice;
}
}

