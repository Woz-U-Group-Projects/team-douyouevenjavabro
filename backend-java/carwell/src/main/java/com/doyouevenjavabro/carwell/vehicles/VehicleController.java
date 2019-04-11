package com.doyouevenjavabro.carwell.vehicles;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class VehicleController {
	
	@Autowired
	VehicleRepository vehicleDB;
	
//	display all vehicles GET@api/vehicles/all
	@GetMapping("/vehicles/all")
	public List<Vehicle> getVehicles(){
		List <Vehicle> foundVehicles = vehicleDB.findAll();
		System.out.println("Vehicles were requested from DB");
		return foundVehicles;
	}
	

}
