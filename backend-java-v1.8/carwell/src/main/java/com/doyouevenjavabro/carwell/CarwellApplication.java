package com.doyouevenjavabro.carwell;

import java.text.ParseException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.doyouevenjavabro.carwell.services.ServiceMaster;

@SpringBootApplication
public class CarwellApplication {

	public static void main(String[] args) throws ParseException {
		SpringApplication.run(CarwellApplication.class, args);
		System.out.println("yeah, yeah, im running...");
		System.out.println("==========================================================================");
//		ServiceMaster.dayDifference("2019-04-13");

	}
}
