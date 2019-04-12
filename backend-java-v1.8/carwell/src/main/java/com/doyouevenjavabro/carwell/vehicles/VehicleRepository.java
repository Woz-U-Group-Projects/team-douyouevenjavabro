package com.doyouevenjavabro.carwell.vehicles;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VehicleRepository extends MongoRepository <Vehicle, String>{
	Vehicle findByVehicleId(Integer v_id);
	Vehicle findByReleaseYear(Integer releaseYear);
	Vehicle findByMake(String make);
	Vehicle findByModel(String model);
	Vehicle findById(ObjectId id);
}