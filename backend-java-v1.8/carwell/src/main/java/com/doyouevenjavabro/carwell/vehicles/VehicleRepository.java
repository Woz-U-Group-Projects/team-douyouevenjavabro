package com.doyouevenjavabro.carwell.vehicles;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VehicleRepository extends MongoRepository<Vehicle, String> {
	Vehicle findById (ObjectId id);
	List<Vehicle> findByOwner(String owner);

	@Override
	void delete(Vehicle deleted);
}