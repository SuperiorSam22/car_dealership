package com.example.demo.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Car_Entries")
public class Cars {
	@Id
	@GeneratedValue
	private int id;
	private String image;

	private String Carname;
	private String EngineCapacity;
	private int Price;
	private String Fueltype;
	private String mileage;
	private String power;
	private String torque;
	private String transmission;
	private String modelYear;
	private String kmsDriven;

	public Cars(int id, String image2, String carname2, String engineCapacity2, int price2, String fueltype2,String mileage, String power, String torque, String transmission, String modelYear, String kmsDriven  ) {
		this.id = id;
		this.image=image2;
		this.Carname=carname2;
		this.Fueltype=fueltype2;
		this.Price=price2;
		this.EngineCapacity=engineCapacity2;
		this.mileage = mileage;
		this.power = power;
		this.torque = torque;
		this.transmission = transmission;
		this.modelYear = modelYear;
		this.kmsDriven = kmsDriven;
	}
	public Cars() {
		super();

	}
	public String getMileage() {
		return mileage;
	}

	public void setMileage(String mileage) {
		this.mileage = mileage;
	}

	public String getPower() {
		return power;
	}

	public void setPower(String power) {
		this.power = power;
	}

	public String getTorque() {
		return torque;
	}

	public void setTorque(String torque) {
		this.torque = torque;
	}

	public String getTransmission() {
		return transmission;
	}

	public void setTransmission(String transmission) {
		this.transmission = transmission;
	}

	public String getModelYear() {
		return modelYear;
	}

	public void setModelYear(String modelYear) {
		this.modelYear = modelYear;
	}

	public String getKmsDriven() {
		return kmsDriven;
	}

	public void setKmsDriven(String kmsDriven) {
		this.kmsDriven = kmsDriven;
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
		this.Carname = carname;
	}
	public String getEngineCapacity() {
		return EngineCapacity;
	}
	public void setEngineCapacity(String engineCapacity) {
		EngineCapacity = engineCapacity;
	}
	public int getPrice() {
		return Price;
	}
	public void setPrice(int price) {
		this.Price = price;
	}
	public String getFueltype() {
		return Fueltype;
	}
	public void setFueltype(String fueltype) {
		this.Fueltype = fueltype;
	}

   
}
