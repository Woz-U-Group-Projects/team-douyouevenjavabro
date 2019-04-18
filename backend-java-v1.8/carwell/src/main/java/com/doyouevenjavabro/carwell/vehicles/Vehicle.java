package com.doyouevenjavabro.carwell.vehicles;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import javax.persistence.Entity;
import javax.persistence.Id;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.core.mapping.Document;

@Entity
@Document(collection = "vehicles")
public class Vehicle {

	@Id
	private ObjectId id;
	private String owner;
	private String make;
	private String model;
	private Integer releaseYear;
	private Integer milesPerDay;
	private String regDate = setTimeStamp();

//Overloaded constructor	
	public Vehicle(ObjectId id, String owner, String make, String model, Integer releaseYear, Integer milesPerDay) {
		this.id = id;
		this.owner = owner;
		this.make = make;
		this.model = model;
		this.releaseYear = releaseYear;
		this.milesPerDay = milesPerDay;
//		this.regDate = regDate; should be commented out

	}

// Getters and Setters
	public String getId() {
		return id.toHexString();
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

	public String getOwner() {
		return owner;
	}

	public void setOwner(String owner) {
		this.owner = owner;
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

	public Integer getReleaseYear() {
		return releaseYear;
	}

	public void setReleaseYear(Integer releaseYear) {
		this.releaseYear = releaseYear;
	}

	public Integer getMilesPerDay() {
		return milesPerDay;
	}

	public void setMilesPerDay(Integer milesPerDay) {
		this.milesPerDay = milesPerDay;
	}

	public String getRegDate() {
		return regDate;
	}

//Capture current time/date function
	public static String setTimeStamp() {
		LocalDateTime now = LocalDateTime.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		String formatDateTime = now.format(formatter);
		return formatDateTime;
	}

}
