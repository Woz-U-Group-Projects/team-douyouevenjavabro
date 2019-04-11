package com.doyouevenjavabro.carwell.vehicles;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "vehicles")
public class Vehicle {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer v_ID;
	private String make;
	private String model;
	private Integer year;
	private Integer milesPerDay;

//	Getters and Setters
	public Integer getMilesPerDay() {
		return milesPerDay;
	}

	public void setMilesPerDay(Integer milesPerDay) {
		this.milesPerDay = milesPerDay;
	}

	public Integer getV_ID() {
		return v_ID;
	}

	public void setV_ID(Integer v_ID) {
		this.v_ID = v_ID;
	}

	public String getMake() {
		return make;
	}

	public void setMake(String make) {
		this.make = make;
	}

	public String getModel() {
		return model;
	}

	public void setModel(String model) {
		this.model = model;
	}

	public Integer getYear() {
		return year;
	}

	public void setYear(Integer year) {
		this.year = year;
	}

}
