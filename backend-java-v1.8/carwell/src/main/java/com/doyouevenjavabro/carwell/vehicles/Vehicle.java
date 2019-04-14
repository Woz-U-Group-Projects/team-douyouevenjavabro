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
	private ObjectId _id;
	private Integer vehicleId;
	private String make;
	private String model;
	private Integer releaseYear;
	private Integer milesPerDay;
	private String timeStamp = setTimeStamp();
	private String regDate;

	public Vehicle() {}
	
	public Vehicle(ObjectId _id, Integer vehicleId, String make, String model, Integer releaseYear, Integer milesPerDay, String timeStamp, String regDate) {
		this._id = _id;
		this.vehicleId = vehicleId;
		this.make = make;
		this.model = model;
		this.releaseYear = releaseYear;
		this.milesPerDay = milesPerDay;
		this.timeStamp = timeStamp;
		this.regDate = regDate;
		
	}
	
	public String get_id() {
		return _id.toHexString();
	}

	public void set_id(ObjectId _id) {
		this._id = _id;
	}

	public Integer getVehicleId() {
		return vehicleId;
	}

	public void setVehicleId(Integer vehicleId) {
		this.vehicleId = vehicleId;
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
		return releaseYear;
	}

	public void setYear(Integer year) {
		this.releaseYear = year;
	}
	
	public Integer getReleaseYear() {
		return releaseYear;
	}

	public void setReleaseYear(Integer releaseYear) {
		this.releaseYear = releaseYear;
	}
	
	// Getters and Setters
	public Integer getMilesPerDay() {
		return milesPerDay;
	}

	public void setMilesPerDay(Integer milesPerDay) {
		this.milesPerDay = milesPerDay;
	}

	public String getTimeStamp() {
		return timeStamp;
	}

	public static String setTimeStamp() {
		LocalDateTime now = LocalDateTime.now();
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss");
		String formatDateTime = now.format(formatter);
		return formatDateTime;
	}

	public String getRegDate() {
		return regDate;
	}
}
