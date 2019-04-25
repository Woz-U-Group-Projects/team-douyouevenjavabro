package com.doyouevenjavabro.carwell.services;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.doyouevenjavabro.carwell.vehicles.Vehicle;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/servicemaster")
public class ServiceMasterController {

	// GET all
	@RequestMapping(method = RequestMethod.GET, value = { "", "/" })
	public String[][] allMilestones() {

		return ServiceMaster.allMilestones;
	}

	// GET 7500
	@RequestMapping(method = RequestMethod.GET, value = { "7500", "7500/" })
	public String[] get7500() {

		return ServiceMaster.milestone7hk;
	}

	// GET 15000
	@RequestMapping(method = RequestMethod.GET, value = { "15000", "15000/" })
	public String[] get15000() {

		return ServiceMaster.milestone15k;
	}

	// GET 22500
	@RequestMapping(method = RequestMethod.GET, value = { "22500", "22500/" })
	public String[] get22500() {

		return ServiceMaster.milestone22hk;
	}

	// GET 30000
	@RequestMapping(method = RequestMethod.GET, value = { "30000", "30000/" })
	public String[] get30000() {

		return ServiceMaster.milestone30k;
	}

	// GET 37500
	@RequestMapping(method = RequestMethod.GET, value = { "37500", "37500/" })
	public String[] get37500() {

		return ServiceMaster.milestone37hk;
	}

	// GET 45000
	@RequestMapping(method = RequestMethod.GET, value = { "45000", "45000/" })
	public String[] get45000() {

		return ServiceMaster.milestone45k;
	}

	// GET 52500
	@RequestMapping(method = RequestMethod.GET, value = { "52500", "52500/" })
	public String[] get52500() {

		return ServiceMaster.milestone52hk;
	}

	// GET 60000
	@RequestMapping(method = RequestMethod.GET, value = { "60000", "60000/" })
	public String[] get60000() {

		return ServiceMaster.milestone60k;
	}

	// GET 67500
	@RequestMapping(method = RequestMethod.GET, value = { "67500", "67500/" })
	public String[] get67500() {

		return ServiceMaster.milestone67hk;
	}

	// GET 75000
	@RequestMapping(method = RequestMethod.GET, value = { "75000", "75000/" })
	public String[] get75000() {

		return ServiceMaster.milestone75k;
	}

	// GET 82500
	@RequestMapping(method = RequestMethod.GET, value = { "82500", "82500/" })
	public String[] get82500() {

		return ServiceMaster.milestone82hk;
	}

	// GET 90000
	@RequestMapping(method = RequestMethod.GET, value = { "90000", "90000/" })
	public String[] get90000() {

		return ServiceMaster.milestone90k;
	}

	// GET 97500
	@RequestMapping(method = RequestMethod.GET, value = { "97500", "97500/" })
	public String[] get97500() {

		return ServiceMaster.milestone97hk;
	}

	// GET 105000
	@RequestMapping(method = RequestMethod.GET, value = { "105000", "105000/" })
	public String[] get105000() {

		return ServiceMaster.milestone105k;
	}

	// GET 112500
	@RequestMapping(method = RequestMethod.GET, value = { "112500", "112500/" })
	public String[] get112500() {

		return ServiceMaster.milestone112hk;
	}

	// GET 120000
	@RequestMapping(method = RequestMethod.GET, value = { "120000", "120000/" })
	public String[] get120000() {

		return ServiceMaster.milestone120k;
	}

	// GET 127500
	@RequestMapping(method = RequestMethod.GET, value = { "127500", "127500/" })
	public String[] get127500() {

		return ServiceMaster.milestone127hk;
	}

	// GET 135000
	@RequestMapping(method = RequestMethod.GET, value = { "135000", "135000/" })
	public String[] get135000() {

		return ServiceMaster.milestone135k;
	}

	// GET 142500
	@RequestMapping(method = RequestMethod.GET, value = { "142500", "142500/" })
	public String[] get142500() {

		return ServiceMaster.milestone142hk;
	}

	// GET 150000
	@RequestMapping(method = RequestMethod.GET, value = { "150000", "150000/" })
	public String[] get150000() {

		return ServiceMaster.milestone150k;
	}

	// GET Above 150000 miles
	@RequestMapping(method = RequestMethod.GET, value = { "final", "final/" })
	public String[] getFinal() {

		return ServiceMaster.milestoneAbove150k;
	}

//GET by Special Calculation
//needed: milesAtRegestration, currentDate, redDate, milesPerDay
	@RequestMapping(method = RequestMethod.GET, value = "reminder/{milesAtRegestration}/{redDate}/{milesPerDay}")

	public String[] path(@PathVariable("milesAtRegestration") Integer milesAtRegestration,
			@PathVariable("redDate") String regDate, @PathVariable("milesPerDay") Integer milesPerDay)

			throws ParseException {
		// get current date
		String currentDate = Vehicle.setTimeStamp();
		// calculate difference in days
		SimpleDateFormat format = new SimpleDateFormat("yyyyMMdd");

		Date regDateParsed = format.parse(regDate);
		Date currentDateParsed = format.parse(currentDate);
		long diff = currentDateParsed.getTime() - regDateParsed.getTime();
		long diffDays = diff / (24 * 60 * 60 * 1000);

		Integer diffDaysInt = (int) diffDays;
		// calculate current mileage
		Integer currentMileage = milesPerDay * (diffDaysInt) + milesAtRegestration;

		System.out.println("Got call for a custom API with (Miles At Registrations: " + milesAtRegestration
				+ "; Registration Date: " + regDate + "; Miles Per Day: " + milesPerDay);
		System.out.println("Today: " + currentDate);
		System.out.println("Days passed since vehicle was registered: " + diffDays);
		System.out.println("Taking all data into consideration vehicle should have about " + currentMileage + " miles");

		String[] usersRecomendation = {"There was an error"};
		// 7500 miles
		if (currentMileage >= 0 && currentMileage <= 7500) {
			System.out.println("Next milestone is 75000");
			usersRecomendation = ServiceMaster.milestone7hk;
		}
		// 15000 miles
		else if (currentMileage >= 7501 && currentMileage <= 15000) {
			System.out.println("Next milestone is 15000");
			usersRecomendation = ServiceMaster.milestone15k;
		}
		// 22500 miles
		else if (currentMileage >= 15001 && currentMileage <= 22500) {
			System.out.println("Next milestone is 22500");
			usersRecomendation = ServiceMaster.milestone22hk;
		}
		// 30000 miles
		else if (currentMileage >= 22501 && currentMileage <= 30000) {
			System.out.println("Next milestone is 30000");
			usersRecomendation = ServiceMaster.milestone30k;
		}
		// 37500 miles
		else if (currentMileage >= 30001 && currentMileage <= 37500) {
			System.out.println("Next milestone is 37500");
			usersRecomendation = ServiceMaster.milestone37hk;
		}
		// 45000 miles
		else if (currentMileage >= 37501 && currentMileage <= 45000) {
			System.out.println("Next milestone is 45000");
			usersRecomendation = ServiceMaster.milestone45k;
		}
		// 52500 miles
		else if (currentMileage >= 45001 && currentMileage <= 52500) {
			System.out.println("Next milestone is 52500");
			usersRecomendation = ServiceMaster.milestone52hk;
		}
		// 60000 miles
		else if (currentMileage >= 52501 && currentMileage <= 60000) {
			System.out.println("Next milestone is 60000");
			usersRecomendation = ServiceMaster.milestone60k;
		}
		// 67500 miles
		else if (currentMileage >= 60001 && currentMileage <= 67500) {
			System.out.println("Next milestone is 67500");
			usersRecomendation = ServiceMaster.milestone67hk;
		}
		// 75000 miles
		else if (currentMileage >= 67501 && currentMileage <= 75000) {
			System.out.println("Next milestone is 75000");
			usersRecomendation = ServiceMaster.milestone75k;
		}
		// 82500 miles
		else if (currentMileage >= 75001 && currentMileage <= 82500) {
			System.out.println("Next milestone is 82500");
			usersRecomendation = ServiceMaster.milestone82hk;
		}
		// 90000 miles
		else if (currentMileage >= 82501 && currentMileage <= 90000) {
			System.out.println("Next milestone is 90000");
			usersRecomendation = ServiceMaster.milestone90k;
		}
		// 97500 miles
		else if (currentMileage >= 90001 && currentMileage <= 97500) {
			System.out.println("Next milestone is 97500");
			usersRecomendation = ServiceMaster.milestone97hk;
		}
		// 105000 miles
		else if (currentMileage >= 97501 && currentMileage <= 105000) {
			System.out.println("Next milestone is 105000");
			usersRecomendation = ServiceMaster.milestone105k;
		}
		// 112500 miles
		else if (currentMileage >= 105001 && currentMileage <= 112500) {
			System.out.println("Next milestone is 112500");
			usersRecomendation = ServiceMaster.milestone112hk;
		}
		// 120000 miles
		else if (currentMileage >= 112501 && currentMileage <= 120000) {
			System.out.println("Next milestone is 120000");
			usersRecomendation = ServiceMaster.milestone120k;
		}
		// 127500 miles
		else if (currentMileage >= 120001 && currentMileage <= 127500) {
			System.out.println("Next milestone is 127500");
			usersRecomendation = ServiceMaster.milestone127hk;
		}
		// 135000 miles
		else if (currentMileage >= 127501 && currentMileage <= 135000) {
			System.out.println("Next milestone is 135000");
			usersRecomendation = ServiceMaster.milestone135k;
		}
		// 142500 miles
		else if (currentMileage >= 135001 && currentMileage <= 142500) {
			System.out.println("Next milestone is 142500");
			usersRecomendation = ServiceMaster.milestone142hk;
		}
		// 150000 miles
		else if (currentMileage >= 142501 && currentMileage <= 150000) {
			System.out.println("Next milestone is 150000");
			usersRecomendation = ServiceMaster.milestone150k;
		}
		// Above 150000 miles
		else if (currentMileage >= 150001) {
			System.out.println("Above 15000 miles, no recomendations");
			usersRecomendation = ServiceMaster.milestoneAbove150k;
		} else {
			System.out.println("There was an error in a calculation");
		}

		return usersRecomendation;

	}
}
