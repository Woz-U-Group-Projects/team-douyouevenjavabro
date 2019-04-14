package com.doyouevenjavabro.carwell.vehicles;

import java.util.List;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class VehicleController {

	@Autowired
	VehicleRepository vehicleDB;

//	display all vehicles GET@api/vehicles/all
//	@GetMapping("/vehicles/all")
//	public List<Vehicle> getVehicles(){
//		List <Vehicle> foundVehicles = vehicleDB.findAll();
//		System.out.println("Vehicles were requested from DB. Return is: " + foundVehicles);
//		return foundVehicles;
//	}

//	display all vehicles GET@api/vehicles/all
	@GetMapping("vehicles/all")
	public List<Vehicle> getVehicles() {
		System.out.println("Vehicles were requested from DB. Return is: " + vehicleDB.findAll());
		return vehicleDB.findAll();
	}
	
//	@RequestMapping(value = "api/vehicles/id/{id}", method = RequestMethod.GET)
//	public Vehicle getVehicleById(@PathVariable("id") ObjectId id) {
//		return vehicleDB.findBy_id(id);
//	}
	
	
	@GetMapping("vehicles/id/{id}")
	public ResponseEntity<Vehicle> getVehicleById(@PathVariable("id") ObjectId id) {
		Vehicle foundVehicle = vehicleDB.findBy_id(id);

		if (foundVehicle == null) {
			return ResponseEntity.notFound().header("Vehicle", "Nothing found with that _id").build();
		}
		return ResponseEntity.ok(foundVehicle);
	}

	@GetMapping("vehicles/vehicleId/{vehicleId}")
	public ResponseEntity<Vehicle> getVehicle(@PathVariable("vehicleId") Integer vehicleId) {
		Vehicle foundVehicle = vehicleDB.findByVehicleId(vehicleId);

		if (foundVehicle == null) {
			return ResponseEntity.notFound().header("Vehicle", "Nothing found with that vehicleId").build();
		}
		return ResponseEntity.ok(foundVehicle);
	}
	
	@GetMapping("vehicles/year/{releaseYear}")
	public ResponseEntity<Vehicle> getVehicleByReleaseYear(@PathVariable("releaseYear") Integer releaseYear) {
		Vehicle foundVehicle = vehicleDB.findByReleaseYear(releaseYear);

		if (foundVehicle == null) {
			return ResponseEntity.notFound().header("Vehicle", "Nothing found with that id").build();
		}
		return ResponseEntity.ok(foundVehicle);
	}

	@GetMapping("vehicles/make/{make}")
	public ResponseEntity<Vehicle> getVehicleByMake(@PathVariable("make") String make) {
		Vehicle foundVehicle = vehicleDB.findByMake(make);

		if (foundVehicle == null) {
			return ResponseEntity.notFound().header("Vehicle", "Nothing found with that make").build();
		}
		return ResponseEntity.ok(foundVehicle);
	}
	
	@GetMapping("vehicles/model/{model}")
	public ResponseEntity<Vehicle> getVehicleByModel(@PathVariable("model") String model) {
		Vehicle foundVehicle = vehicleDB.findByModel(model);

		if (foundVehicle == null) {
			return ResponseEntity.notFound().header("Vehicle", "Nothing found with that model").build();
		}
		return ResponseEntity.ok(foundVehicle);
	}
	
	//	POST vehicle (id)
	@PostMapping("/vehicles")
	public ResponseEntity<Vehicle> postVehicle(@RequestBody Vehicle vehicle) {
		Vehicle createdVehicle = vehicleDB.save(vehicle);
		return ResponseEntity.ok(createdVehicle);
	}
	
	//	PUT vehicle (id)
		
	//	DELETE vehicle (id)
	
}
