package com.doyouevenjavabro.carwell.vehicles;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api")
public class VehicleController {

	@Autowired
	VehicleRepository vehicleDB;
	
	@RequestMapping(method=RequestMethod.GET, value="/vehicles")
	public Iterable<Vehicle> vehicle() {
		return vehicleDB.findAll();
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/vehicles")
	public Vehicle save(@RequestBody Vehicle vehicle) {
		vehicleDB.save(vehicle);
		
		return vehicle;
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/vehicles/{id}")
	public Vehicle update(@PathVariable String id, @RequestBody Vehicle vehicle) {
		Optional<Vehicle> optvehicle = vehicleDB.findById(id);
		Vehicle c = optvehicle.get();
		
		if(vehicle.getVehicleId() != null)
			c.setVehicleId(vehicle.getVehicleId());
		if(vehicle.getReleaseYear() != null)
			c.setReleaseYear(vehicle.getReleaseYear());
		if(vehicle.getYear() != null)
			c.setYear(vehicle.getYear());
		if(vehicle.getMake() != null)
			c.setMake(vehicle.getMake());
		if(vehicle.getModel() != null)
			c.setModel(vehicle.getModel());
		if(vehicle.getMilesPerDay() != null)
			c.setMilesPerDay(vehicle.getMilesPerDay());
		if(vehicle.getVehicleId() != null)
			c.setVehicleId(vehicle.getVehicleId());
		vehicleDB.save(c);
		return c;
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/vehicles/{id}")
	public String delete(@PathVariable String id) {
		Optional<Vehicle> optvehicle = vehicleDB.findById(id);
		Vehicle vehicle = optvehicle.get();
		vehicleDB.delete(vehicle);
		
		return "";
	}
}
