package com.doyouevenjavabro.carwell.vehicles;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VehicleRepository extends MongoRepository <Vehicle, String>{
Vehicle findByVehicleId(Integer id);
Vehicle findByReleaseYear(Integer releaseYear);
Vehicle findById(ObjectId id);
}