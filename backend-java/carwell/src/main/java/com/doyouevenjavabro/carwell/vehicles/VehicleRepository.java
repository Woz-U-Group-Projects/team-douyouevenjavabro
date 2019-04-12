package com.doyouevenjavabro.carwell.vehicles;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface VehicleRepository extends MongoRepository <Vehicle, String>{
Vehicle findByVehicleId(Integer id);
Vehicle findByReleaseYear(Integer releaseYear);
}
