package com.doyouevenjavabro.carwell.vehicles;

import java.util.List;
import java.util.Optional;

import org.bson.types.ObjectId;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/vehicles/")
public class VehicleController {

	@Autowired
	VehicleRepository vehicleDB;

//GET all	
	@RequestMapping(method = RequestMethod.GET, value = { "admin", "admin/" })
	public Iterable<Vehicle> vehicle() {
		return vehicleDB.findAll();
	}

//GET by id
	@RequestMapping(method = RequestMethod.GET, value = "{id}")
	public ResponseEntity<Vehicle> getVehicle(@PathVariable("id") ObjectId id) {
		Vehicle foundVehicle = vehicleDB.findById(id);

		if (foundVehicle == null) {
			return ResponseEntity.notFound().header("Vehicles", "Nothing was found").build();
		}
		System.out.println("Got request for vehicle using unique ID: " + id);
		return ResponseEntity.ok(foundVehicle);
	}

//GET by multiple entries by owner	
	@RequestMapping(method = RequestMethod.GET, value = "owner/{owner}")
	public List<Vehicle> getVehiclesByOwner(@PathVariable("owner") String owner) {
		System.out.println("Got search request for all vehivles based on: " + owner);
		List<Vehicle> result = vehicleDB.findByOwner(owner);

		if (result.isEmpty()) {
			System.out.println("Search query using: \"" + owner + "\". I got no results");

			return result;
		} else
			System.out.println("Search query using: \"" + owner + "\". Provided results");
		return result;

	}

//POST	
	@RequestMapping(method = RequestMethod.POST, value = { "" })
	public Vehicle save(@RequestBody Vehicle vehicle) {
		vehicleDB.save(vehicle);
		return vehicle;
	}

//PUT by id	
	@RequestMapping(method = RequestMethod.PUT, value = "{id}")
	public Vehicle update(@PathVariable String id, @RequestBody Vehicle vehicle) {
		Optional<Vehicle> optvehicle = vehicleDB.findById(id);
		Vehicle updatedVehicle = optvehicle.get();

		if (vehicle.getOwner() != null)
			updatedVehicle.setOwner(vehicle.getOwner());
		if (vehicle.getReleaseYear() != null)
			updatedVehicle.setReleaseYear(vehicle.getReleaseYear());
		if (vehicle.getModel() != null)
			updatedVehicle.setModel(vehicle.getModel());
		if (vehicle.getMilesPerDay() != null)
			updatedVehicle.setMilesPerDay(vehicle.getMilesPerDay());
		if (vehicle.getOwner() != null)
			updatedVehicle.setOwner(vehicle.getOwner());
		vehicleDB.save(updatedVehicle);
		System.out.println("Updated vehicle");
		return updatedVehicle;
	}

//DELETE	
	@RequestMapping(method = RequestMethod.DELETE, value = "{id}")
	public String delete(@PathVariable String id) {
		Optional<Vehicle> optvehicle = vehicleDB.findById(id);
		Vehicle vehicle = optvehicle.get();
		vehicleDB.delete(vehicle);
		System.out.println("Deleted vehicle");
		return "Success";
	}
}
