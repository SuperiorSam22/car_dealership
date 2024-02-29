package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Car_Entries")
public class Cars {
	public Cars(String image2, String carname2, String engineCapacity2, String price2, String fueltype2) {
	this.image=image2;
	this.Carname=carname2;
	this.Fueltype=fueltype2;
	this.Price=price2;
	this.EngineCapacity=engineCapacity2;
	}
	public Cars() {
		super();
	
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getCarname() {
		return Carname;
	}
	public void setCarname(String carname) {
		Carname = carname;
	}
	public String getEngineCapacity() {
		return EngineCapacity;
	}
	public void setEngineCapacity(String engineCapacity) {
		EngineCapacity = engineCapacity;
	}
	public String getPrice() {
		return Price;
	}
	public void setPrice(String price) {
		Price = price;
	}
	public String getFueltype() {
		return Fueltype;
	}
	public void setFueltype(String fueltype) {
		Fueltype = fueltype;
	}
	@Id
	@GeneratedValue
	private int id;
private String image;

private String Carname;
   private String EngineCapacity;
   private String Price;
   private String Fueltype;
   
}
