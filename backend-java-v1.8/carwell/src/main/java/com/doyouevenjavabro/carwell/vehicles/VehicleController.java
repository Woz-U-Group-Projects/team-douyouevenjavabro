package com.doyouevenjavabro.carwell.vehicles;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class VehicleController {

	@Autowired
	VehicleRepository vehicleDB;

//	GET all vehicles @ api/vehicles/all
	@CrossOrigin(origins = "http://localhost:3001")
	@GetMapping("vehicles/all")
	public List<Vehicle> getVehicles() {
		System.out.println("Got request for all vehicles.");
		return vehicleDB.findAll();
	}

//	GET vehicle by VehicleId @ api/vehicles/v_id/xxx
	@GetMapping("vehicles/v_id/{v_id}")
	public ResponseEntity<Vehicle> getVehicle(@PathVariable("v_id") Integer v_id) {
		Vehicle foundVehicle = vehicleDB.findByVehicleId(v_id);

		if (foundVehicle == null) {
			return ResponseEntity.notFound().header("Vehicle", "Nothing found with that id").build();
		}
		System.out.println("Got request for vehicle using v_id.");
		return ResponseEntity.ok(foundVehicle);
	}

//	GET vehicle by year @ api/vehicles/year/xxx
	@GetMapping("vehicles/year/{releaseYear}")
	public ResponseEntity<Vehicle> getVehicleByReleaseYear(@PathVariable("releaseYear") Integer releaseYear) {
		Vehicle foundVehicle = vehicleDB.findByReleaseYear(releaseYear);

		if (foundVehicle == null) {
			return ResponseEntity.notFound().header("Vehicle", "Nothing found with that id").build();
		}
		System.out.println("Got request for vehicle using year.");
		return ResponseEntity.ok(foundVehicle);
	}

//	GET vehicle by Id @ api/vehicles/id/xxx
	@GetMapping("vehicles/id/{id}")
	public ResponseEntity<Vehicle> getVehicleId(@PathVariable("id") ObjectId id) {
		Vehicle foundVehicle = vehicleDB.findById(id);

		if (foundVehicle == null) {
			return ResponseEntity.notFound().header("Vehicle", "Nothing found with that id").build();
		}
		System.out.println("Got request for vehicle using unique ID.");
		return ResponseEntity.ok(foundVehicle);
	}
// POST vehicle 

// PUT vehicle by id

//DELETE vehicle by id	
}
