package com.doyouevenjavabro.carwell.vehicles;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface VehicleRepository extends MongoRepository <Vehicle, String>{
	List<Vehicle>findByModel(String model);
	@Override
	void delete(Vehicle deleted);
}