package com.doyouevenjavabro.carwell;

import java.text.ParseException;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class CarwellApplication {

	public static void main(String[] args) throws ParseException {
		SpringApplication.run(CarwellApplication.class, args);
		System.out.println("Skadoosh! we are live...");
		System.out.println("==========================================================================");

	}
}
