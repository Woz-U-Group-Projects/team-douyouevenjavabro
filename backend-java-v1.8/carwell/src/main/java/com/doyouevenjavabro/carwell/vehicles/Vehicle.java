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
	private Integer vehicleId;
	private String make;
	private String model;
	private Integer releaseYear;
	private Integer milesPerDay;
	private String timeStamp = setTimeStamp();
	private String regDate;

	public Integer getReleaseYear() {
		return releaseYear;
	}

	public void setReleaseYear(Integer releaseYear) {
		this.releaseYear = releaseYear;
	}

	public String getId() {
		return id.toHexString();
	}

	public void setId(ObjectId id) {
		this.id = id;
	}

	// Getters and Setters
	public Integer getMilesPerDay() {
		return milesPerDay;
	}

	public void setMilesPerDay(Integer milesPerDay) {
		this.milesPerDay = milesPerDay;
	}

	public Integer getVehicleId() {
		return vehicleId;
	}

	public void setVehicleId(Integer vID) {
		this.vehicleId = vID;
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
