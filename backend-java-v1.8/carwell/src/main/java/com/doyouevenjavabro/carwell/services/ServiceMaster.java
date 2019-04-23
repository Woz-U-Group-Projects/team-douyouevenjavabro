package com.doyouevenjavabro.carwell.services;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.doyouevenjavabro.carwell.vehicles.Vehicle;

public class ServiceMaster {
//	this class contains hard coded values of different services

//A	
	public final static String serviceA1 = "Replace engine oil!";
	public final static String serviceA2 = "Rotate tires!";

//B	
	public final static String serviceB1 = "Replace engine oil filter!";
	public final static String serviceB2 = "Inspect front and rear brakes!";
	public final static String serviceB3 = "Check parking brake adjustment!";
	public final static String serviceB4 = "Inspect tie rod ends, steering gearbox and boots!";
	public final static String serviceB5 = "Inspect suspension components!";
	public final static String serviceB6 = "Inspect driveshaft boots!";
	public final static String serviceB7 = "Inspect brake hoses and lines!";
	public final static String serviceB8 = "Check all fluid levels, condition of fluids, and check for leaks!";
	public final static String serviceB9 = "Inspect cooling system hoses and connections!";
	public final static String serviceB10 = "Inspect exhaust system!";
	public final static String serviceB11 = "Inspect fuel lines and connections!";

//C
	public final static String serviceC1 = "RepIace air cleaner element!";
	public final static String serviceC2 = "Replace spark plugs!";
	public final static String serviceC3 = "Inspect and adjust drive belts!";

//Add-ons
	public final static String serviceAdd30k = "Check valve clearence, cold engine!";
	public final static String serviceAdd45k = "Replace coolant! Replace break fluid!";
	public final static String serviceAdd75k = "Replace coolant!";
	public final static String serviceAdd90k = "Replace break fluid! Replace transmission fluid!";
	public final static String serviceAdd105k = "Replace timing belt, inspect water pump! Replace coolant! Check idle speed!";
	public final static String serviceFinal = "I got no recommendations from the dealer for the cars with mileage beyond 150,000 miles, maybe it is a time to think about a new car??";
//milestones
	// 7500
	public final static String[] milestone7hk = { serviceA1, serviceA2 };
	// 15000
	public final static String[] milestone15k = { serviceA1, serviceA2, serviceB1, serviceB2, serviceB3, serviceB4,
			serviceB5, serviceB6, serviceB7, serviceB8, serviceB9, serviceB10, serviceB11 };
	// 22500
	public final static String[] milestone22hk = { serviceA1, serviceA2 };
	// 30000
	public final static String[] milestone30k = { serviceA1, serviceA2, serviceB1, serviceB2, serviceB3, serviceB4,
			serviceB5, serviceB6, serviceB7, serviceB8, serviceB9, serviceB10, serviceB11, serviceC1, serviceC2,
			serviceC3, serviceAdd30k };
	// 37500
	public final static String[] milestone37hk = { serviceA1, serviceA2 };
	// 45000
	public final static String[] milestone45k = { serviceA1, serviceA2, serviceB1, serviceB2, serviceB3, serviceB4,
			serviceB5, serviceB6, serviceB7, serviceB8, serviceB9, serviceB10, serviceB11, serviceAdd45k };
	// 52500
	public final static String[] milestone52hk = { serviceA1, serviceA2 };
	// 60000
	public final static String[] milestone60k = { serviceA1, serviceA2, serviceB1, serviceB2, serviceB3, serviceB4,
			serviceB5, serviceB6, serviceB7, serviceB8, serviceB9, serviceB10, serviceB11, serviceC1, serviceC2,
			serviceC3 };
	// 67500
	public final static String[] milestone67hk = { serviceA1, serviceA2 };
	// 75000
	public final static String[] milestone75k = { serviceA1, serviceA2, serviceB1, serviceB2, serviceB3, serviceB4,
			serviceB5, serviceB6, serviceB7, serviceB8, serviceB9, serviceB10, serviceB11, serviceAdd75k };
	// 82500
	public final static String[] milestone82hk = { serviceA1, serviceA2 };
	// 90000
	public final static String[] milestone90k = { serviceA1, serviceA2, serviceB1, serviceB2, serviceB3, serviceB4,
			serviceB5, serviceB6, serviceB7, serviceB8, serviceB9, serviceB10, serviceB11, serviceC1, serviceC2,
			serviceC3, serviceAdd90k };
	// 97500
	public final static String[] milestone97hk = { serviceA1, serviceA2 };
	// 105000
	public final static String[] milestone105k = { serviceA1, serviceA2, serviceB1, serviceB2, serviceB3, serviceB4,
			serviceB5, serviceB6, serviceB7, serviceB8, serviceB9, serviceB10, serviceB11, serviceAdd105k };
	// 112500
	public final static String[] milestone112hk = { serviceA1, serviceA2 };
	// 120000
	public final static String[] milestone120k = { serviceA1, serviceA2, serviceB1, serviceB2, serviceB3, serviceB4,
			serviceB5, serviceB6, serviceB7, serviceB8, serviceB9, serviceB10, serviceB11, serviceC1, serviceC2,
			serviceC3 };
	// 127500
	public final static String[] milestone127hk = { serviceA1, serviceA2 };
	// 135000
	public final static String[] milestone135k = { serviceA1, serviceA2, serviceB1, serviceB2, serviceB3, serviceB4,
			serviceB5, serviceB6, serviceB7, serviceB8, serviceB9, serviceB10, serviceB11 };
	// 142500
	public final static String[] milestone142hk = { serviceA1, serviceA2 };
	// 150000
	public final static String[] milestone150k = { serviceA1, serviceA2, serviceB1, serviceB2, serviceB3, serviceB4,
			serviceB5, serviceB6, serviceB7, serviceB8, serviceB9, serviceB10, serviceB11, serviceC1, serviceC2,
			serviceC3 };
	// Above150000
	public final static String[] milestoneAbove150k = { serviceFinal };
	// all
	public final static String[][] allMilestones = { milestone7hk, milestone15k, milestone22hk, milestone30k,
			milestone37hk, milestone45k, milestone52hk, milestone60k, milestone67hk, milestone75k, milestone82hk,
			milestone90k, milestone97hk, milestone105k, milestone112hk, milestone120k, milestone127hk, milestone135k,
			milestone142hk, milestone150k, milestoneAbove150k };

////method to calculate difference in days
//	public static long dayDifference(String regDate) throws ParseException {
//		String currentDate = Vehicle.setTimeStamp();
//		SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
//
//		Date regDateParsed = format.parse(regDate);
//		Date currentDateParsed = format.parse(currentDate);
//		long diff = currentDateParsed.getTime() - regDateParsed.getTime();
//		long diffDays = diff / (24 * 60 * 60 * 1000);
//		System.out.println(diffDays + " day(s)");
//		return diffDays;
//	}
//	
////method to calculate current mileage
//	public static Integer currentMileage(Integer regMiles, String regDate, String currentDate, Integer milesPerDay) {
//		
//		return milesPerDay;
//	}
}