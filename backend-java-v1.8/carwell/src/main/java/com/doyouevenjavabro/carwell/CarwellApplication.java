package com.doyouevenjavabro.carwell;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.doyouevenjavabro.carwell.services.ServiceMaster;

@SpringBootApplication
public class CarwellApplication {

	public static void main(String[] args) {
		SpringApplication.run(CarwellApplication.class, args);
		System.out.println("yeah, yeah, im running...");
//example of pulling and printing items from milestone30k array		
		for (String arrayItem : ServiceMaster.milestone30k) {
			System.out.println(arrayItem);
		}

	}

}
